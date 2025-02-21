import {HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {inject} from '@angular/core';
import {catchError, switchMap, throwError} from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const accessToken = authService.getAccessToken();

  // Add the token to the request if found
  const reqWithToken = accessToken ?
    req.clone({
      headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
    })
    :
    req;

  return next(reqWithToken).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // The token is invalid or not found
        return authService.refreshToken().pipe(
          switchMap(({ accessToken, refreshToken }) => {
            authService.storeToken(accessToken, refreshToken);

            // Retry the failed request with the new access token
            const retryReq = req.clone({
              setHeaders: { Authorization: `Bearer ${accessToken}` },
            });

            return next(retryReq);
          }),
          catchError(refreshError => {
            // Log the user out if the refreshing failed
            authService.logout();
            return throwError(() => new Error('Session expired. Please log in again.'));
          })
        );

      }
      return throwError(() => error);
    })
  )
};


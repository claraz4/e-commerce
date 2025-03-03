import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../core/authentication/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)

  if (authService.isLoggedIn()) {
    router.navigate(['/']).then(() => {}); // Redirect if already logged in
    return false;
  }
  return true;
};

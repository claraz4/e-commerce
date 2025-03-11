import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthApiService} from '../core/authentication/services/auth-api.service';

export const adminGuard: CanActivateFn = async (route, state) => {
  const authApiService = inject(AuthApiService);
  const router = inject(Router);

  const maxWaitTime = 2000;
  const checkInterval = 100;
  let elapsedTime = 0;

  while (!authApiService.userInfo()) {
    await new Promise(resolve => setTimeout(resolve, checkInterval));
    elapsedTime += checkInterval;

    if (elapsedTime > maxWaitTime) {
      if (authApiService.userInfo()?.role !== 'admin') {
        router.navigate(['/']).then(() => {});
        return false;
      }
    }
  }

  if (authApiService.userInfo()?.role !== 'admin') {
    router.navigate(['/']).then(() => {});
    return false;
  }
  return true;
};

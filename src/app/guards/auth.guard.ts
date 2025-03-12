import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../core/authentication/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const requireAuth: string[] = ["/cart", "/checkout"];
  const dontRequireAuth: string[] = ["/sign-in", "/sign-up"];

  if ((authService.isLoggedIn() && dontRequireAuth.includes(state.url)) || (!authService.isLoggedIn() && requireAuth.includes(state.url))) {
    router.navigate(['/']).then(() => {}); // Redirect if not authenticated or if logged in and is
    return false;
  }

  return true;
};

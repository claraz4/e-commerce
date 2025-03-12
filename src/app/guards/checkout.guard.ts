import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {CartService} from '../features/cart/services/cart.service';

export const checkoutGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService);
  const router = inject(Router);

  if (cartService.cartProducts().length === 0) {
    router.navigate(['/shop']).then(r => {});
    return false;
  }

  return true;
};

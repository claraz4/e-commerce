import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/pages/home/home.component';
import {SignInComponent} from './core/authentication/pages/sign-in/sign-in.component';
import {SignUpComponent} from './core/authentication/pages/sign-up/sign-up.component';
import {authGuard} from './guards/auth.guard';
import {AllProductsPageComponent} from './features/all-products/pages/all-products-page/all-products-page.component';
import {
  SingleProductPageComponent
} from './features/single-product/pages/single-product-page/single-product-page.component';
import {CartPageComponent} from './features/cart/pages/cart-page/cart-page.component';
import {CheckoutPageComponent} from './features/checkout/pages/checkout-page/checkout-page.component';
import {AdminPageComponent} from './features/admin/pages/admin-page/admin-page.component';
import {adminGuard} from './guards/adminGuard';
import {checkoutGuard} from './guards/checkout.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'sign-up', component: SignUpComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'shop', component: AllProductsPageComponent, pathMatch: 'full' },
  { path: 'shop/:id', component: SingleProductPageComponent, pathMatch: 'full' },
  { path: 'cart', component: CartPageComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'checkout', component: CheckoutPageComponent, pathMatch: 'full', canActivate: [authGuard, checkoutGuard] },
  { path: 'admin', component: AdminPageComponent, pathMatch: 'full', canActivate: [adminGuard] },
];


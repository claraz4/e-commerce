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
import {OverviewPageComponent} from './features/admin/overview/pages/overview-page/overview-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'sign-up', component: SignUpComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'shop', component: AllProductsPageComponent, pathMatch: 'full' },
  { path: 'shop/:id', component: SingleProductPageComponent, pathMatch: 'full' },
  { path: 'cart', component: CartPageComponent, pathMatch: 'full' },
  { path: 'checkout', component: CheckoutPageComponent, pathMatch: 'full' },
  { path: 'admin', component: OverviewPageComponent, pathMatch: 'full' },
];

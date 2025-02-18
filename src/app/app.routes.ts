import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/pages/home/home.component';
import {SignInComponent} from './core/authentication/pages/sign-in/sign-in.component';
import {SignUpComponent} from './core/authentication/pages/sign-up/sign-up.component';
import {authGuard} from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, pathMatch: 'full', canActivate: [authGuard] },
  { path: 'sign-up', component: SignUpComponent, pathMatch: 'full', canActivate: [authGuard] },
];

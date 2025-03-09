import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {AuthService} from '../../../authentication/services/auth.service';

@Component({
  selector: 'app-navbar-mobile',
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent {
  isNavbarClicked: boolean = false;
  isLoggedIn: boolean = false;
  url: string = "";

  constructor(private router: Router, private authService: AuthService) {
    // Get the current route
    this.router.events.subscribe(() => {
      this.url = this.router.url;
    });

    // Check whether the user is logged in
    this.isLoggedIn = authService.isLoggedIn();
  }

  handleNavbarClick() {
    this.isNavbarClicked = !this.isNavbarClicked;
  }

  handleLogout() {
    // Logout
    this.authService.logout();
    window.location.reload();
  }
}

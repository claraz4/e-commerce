import {Component, HostListener} from '@angular/core';
import { NavbarSearchComponent } from '../navbar-search/navbar-search.component';
import {Router} from '@angular/router';
import {NgIf, NgStyle} from '@angular/common';
import {AuthService} from '../../authentication/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    NavbarSearchComponent,
    NgStyle,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // Change navbar color when scrolling on home intro
  backgroundColor = 'rgba(255, 255, 255, 1)';
  url: string = "/";
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    // Get the current route
    this.router.events.subscribe(() => {
      this.url = this.router.url;
    });

    // Check whether the user is logged in
    this.isLoggedIn = authService.isLoggedIn();
  }


  // Change the opacity based on the position
  changeOpacity() {
    if (this.url === '/') {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const opacity = Math.min(scrollTop / 400 + 0.6, 1);
      this.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    }
  }

  ngOnInit() {
    this.changeOpacity();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.changeOpacity();
  }
}

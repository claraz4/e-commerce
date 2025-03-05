import {Component, HostListener, SimpleChanges} from '@angular/core';
import { NavbarSearchComponent } from '../navbar-search/navbar-search.component';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass, NgIf, NgStyle} from '@angular/common';
import {AuthService} from '../../../authentication/services/auth.service';
import {ProfileClickComponent} from '../profile-click/profile-click.component';

@Component({
  selector: 'app-navbar',
  imports: [
    NavbarSearchComponent,
    NgStyle,
    NgIf,
    ProfileClickComponent,
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  url: string = "/";
  isLoggedIn: boolean = false;
  showProfileClick: boolean = false;
  // Change navbar color when scrolling on home intro
  backgroundColor = 'rgba(255, 255, 255, 1)';

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

  // Handle the click of the profile
  handleProfileClick() {
    this.showProfileClick = !this.showProfileClick;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.changeOpacity();
  }
}

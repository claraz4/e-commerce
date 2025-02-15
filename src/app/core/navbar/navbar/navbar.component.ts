import {Component, HostListener} from '@angular/core';
import { NavbarSearchComponent } from '../navbar-search/navbar-search.component';
import {Router} from '@angular/router';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    NavbarSearchComponent,
    NgStyle
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // Change navbar color when scrolling on home intro
  backgroundColor = 'rgba(255, 255, 255, 1)';

  // Change the opacity based on the position
  changeOpacity() {
    if (this.router.url === '/') {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const opacity = Math.min(scrollTop / 400 + 0.6, 1);
      this.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    }
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.changeOpacity();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.changeOpacity();
  }
}

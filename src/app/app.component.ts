import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './core/navbar/components/navbar/navbar.component';
import {FooterComponent} from './core/footer/footer/footer.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce-website';
  showPageLayout: boolean = true; // show the navbar and footer
  showNoPageLayoutRoutes: string[] = ['/sign-in', '/sign-up'];

  constructor(private router: Router) {
    // every time navigation ends, check whether to display the navbar/footer or not
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showPageLayout = !this.showNoPageLayoutRoutes.includes(this.router.url);
      }
    });
  }
}

import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './core/navbar/navbar/navbar.component';
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
    this.router.events.subscribe(() => {
      if (this.showNoPageLayoutRoutes.includes(router.url)) {
        this.showPageLayout = false;
      }
    });

  }
}

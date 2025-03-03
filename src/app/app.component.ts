import {Component, inject} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './core/navbar/components/navbar/navbar.component';
import {FooterComponent} from './core/footer/footer/footer.component';
import {NgIf} from '@angular/common';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import {NgxPermissionsModule} from 'ngx-permissions'
import {AuthService} from './core/authentication/services/auth.service';
import {AuthApiService} from './core/authentication/services/auth-api.service';
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    NgIf,
    NgxPermissionsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private router = inject(Router);
  private authApiService = inject(AuthApiService);
  private authService = inject(AuthService);

  title = 'e-commerce-website';
  showPageLayout: boolean = true; // show the navbar and footer
  showNoPageLayoutRoutes: string[] = ['/sign-in', '/sign-up', '/admin'];

  constructor() {
    // every time navigation ends, check whether to display the navbar/footer or not
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showPageLayout = !this.showNoPageLayoutRoutes.includes(this.router.url);
      }
    });

    // Get authenticated user info
    this.authApiService.getAuthUser().subscribe();
  }
}

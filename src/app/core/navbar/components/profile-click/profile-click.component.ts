import { Component } from '@angular/core';
import {AuthService} from '../../../authentication/services/auth.service';

@Component({
  selector: 'app-profile-click',
  imports: [],
  templateUrl: './profile-click.component.html',
  styleUrl: './profile-click.component.scss'
})
export class ProfileClickComponent {
  handleLogout() {
    // Add a popup first before logging out

    // Logout
    this.authService.logout();
    window.location.reload();
  }

  constructor(private authService: AuthService) { }
}

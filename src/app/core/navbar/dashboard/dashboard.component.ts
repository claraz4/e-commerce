import {Component, inject} from '@angular/core';
import {AuthApiService} from '../../authentication/services/auth-api.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private authApiService = inject(AuthApiService);

  get userInfo() {
    return this.authApiService.userInfo();
  }
}

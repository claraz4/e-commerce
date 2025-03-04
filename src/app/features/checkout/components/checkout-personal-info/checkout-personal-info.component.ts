import {Component, inject} from '@angular/core';
import {AuthApiService} from '../../../../core/authentication/services/auth-api.service';

@Component({
  selector: 'app-checkout-personal-info',
  imports: [],
  templateUrl: './checkout-personal-info.component.html',
  styleUrl: './checkout-personal-info.component.scss'
})
export class CheckoutPersonalInfoComponent {
  private authApiService = inject(AuthApiService);

  get userInfo() {
    return this.authApiService.userInfo();
  }
}

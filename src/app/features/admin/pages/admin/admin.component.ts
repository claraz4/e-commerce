import { Component } from '@angular/core';
import {ItemsDetailsComponent} from '../../components/items-details/items-details.component';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';

@Component({
  selector: 'app-admin',
  imports: [
    ItemsDetailsComponent,
    DashboardComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}

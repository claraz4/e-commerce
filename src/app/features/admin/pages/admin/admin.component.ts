import { Component } from '@angular/core';
import {ItemsDetailsComponent} from '../../components/items-details/items-details.component';

@Component({
  selector: 'app-admin',
  imports: [
    ItemsDetailsComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}

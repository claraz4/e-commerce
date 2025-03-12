import { Component } from '@angular/core';
import {newArrivalsArr} from '../../../../assets/newArrivalsArr';

@Component({
  selector: 'app-new-arrivals',
  imports: [],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss'
})
export class NewArrivalsComponent {

  protected readonly newArrivalsArr = newArrivalsArr;
}

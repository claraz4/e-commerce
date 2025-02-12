import { Component } from '@angular/core';
import {HomeIntroComponent} from '../../components/home-intro/home-intro.component';

@Component({
  selector: 'app-home',
  imports: [
    HomeIntroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

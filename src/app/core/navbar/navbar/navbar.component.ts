import { Component } from '@angular/core';
import { NavbarSearchComponent } from '../navbar-search/navbar-search.component';

@Component({
  selector: 'app-navbar',
  imports: [
    NavbarSearchComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-large-button',
  imports: [],
  templateUrl: './large-button.component.html',
  styleUrl: './large-button.component.scss'
})
export class LargeButtonComponent {
  @Input() buttonText: string = "";
  @Input() buttonClickCallback: () => void = () => { };
}

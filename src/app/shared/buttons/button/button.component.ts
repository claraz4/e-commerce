import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {
  @Input() buttonSize: string = "large";
  @Input() buttonText: string = "";
  @Input() buttonClickCallback: () => void = () => { };
}

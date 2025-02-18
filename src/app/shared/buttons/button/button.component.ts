import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() onButtonClickCallback:EventEmitter<any>= new EventEmitter<any>();
  @Input() buttonClass: string = "";
  buttonClickCallback(){
    this.onButtonClickCallback.emit()
  }
}

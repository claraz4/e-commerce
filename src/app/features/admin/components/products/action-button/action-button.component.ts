import { Component } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-action-button',
  imports: [],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent implements ICellRendererAngularComp {
  params!: any;
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }

  handleDelete() {
    this.params.onButtonClick(this.params.data.id);
  }
}

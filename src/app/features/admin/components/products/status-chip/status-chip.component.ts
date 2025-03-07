import {Component} from '@angular/core';
import {ProductStatus} from '../../../models/product-status';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-status-chip',
  imports: [],
  templateUrl: './status-chip.component.html',
  styleUrl: './status-chip.component.scss'
})

export class StatusChipComponent implements ICellRendererAngularComp {
  refresh(params: ICellRendererParams): boolean {
      throw new Error('Method not implemented.');
  }
  statusClass: { [key: string]: string } = {
    text: "status--available-text",
    bg: "status--available-bg",
    circle: "status--available-circle-bg"
  };
  status: ProductStatus = 'Available';

  agInit(params: ICellRendererParams): void{
    this.status = params.value;

    switch(this.status) {
      case "Available":
        this.statusClass = {
          text: "status--available-text",
          bg: "status--available-bg",
          circle: "status--available-circle-bg"
        };
        break;

      case "Running Low":
        this.statusClass = {
          text: "status--running-low-text",
          bg: "status--running-low-bg",
          circle: "status--running-low-circle-bg"
        };
        break;

      default:
        this.statusClass = {
          text: "status--out-of-stock-text",
          bg: "status--out-of-stock-bg",
          circle: "status--out-of-stock-circle-bg"
        };
    }
  }
}

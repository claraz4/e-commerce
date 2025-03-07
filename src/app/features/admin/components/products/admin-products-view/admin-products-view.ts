import { Component } from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import {StatusChipComponent} from '../status-chip/status-chip.component';
import {ActionButtonComponent} from '../action-button/action-button.component';

@Component({
  selector: 'app-admin-products-view',
  imports: [
    AgGridAngular
  ],
  templateUrl: './admin-products-view.html',
  styleUrl: './admin-products-view.scss'
})
export class AdminProductsView {
  myComponents= {
    'status': StatusChipComponent,
    'actions': ActionButtonComponent
  }

  rowData = [
    { id: 1, name: 'Item 1', description: 'This is the description of item 1', price: 10, quantity: 2 },
    { id: 2, name: 'Item 2', description: 'This is the description of item 2', price: 5, quantity: 6 },
    { id: 3, name: 'Item 3', description: 'This is the description of item 3', price: 4, quantity: 10 },
    { id: 4, name: 'Item 4', description: 'This is the description of item 4', price: 24, quantity: 1 },
    { id: 5, name: 'Item 5', description: 'This is the description of item 5', price: 89, quantity: 0 },
    { id: 6, name: 'Item 6', description: 'This is the description of item 6', price: 100, quantity: 2 },
    { id: 7, name: 'Item 7', description: 'This is the description of item 7', price: 101, quantity: 3 },
    { id: 8, name: 'Item 8', description: 'This is the description of item 8', price: 1065, quantity: 0 },
    { id: 9, name: 'Item 9', description: 'This is the description of item 9', price: 43, quantity: 20 },
    { id: 10, name: 'Item 10', description: 'This is the description of item 10', price: 760, quantity: 1 },
    { id: 11, name: 'Item 11', description: 'This is the description of item 11', price: 87, quantity: 34 }
  ]

  updatedRowData = this.rowData.map(product => {
    return {
      ...product,
      status: product.quantity > 3 ? "Available" : product.quantity !== 0 ? "Running Low" : "Out of Stock"
    }
  })

  colDefs: ColDef[] = [
    {
      field: "id",
      sortable: false
    },
    {
      field: "name",
      sortable: true
    },
    {
      field: "description",
      sortable: false,
      editable: true
    },
    {
      field: "price",
      valueFormatter: p => '$' + p.value.toLocaleString(),
      sortable: true
    },
    {
      field: "quantity",
      sortable: true
    },
    {
      field: "status",
      filter: true,
      filterParams: {
        filterOptions: ['contains', 'equals']
      },
      sortable: true,
      cellRenderer: 'status'
    },
    {
      field: "actions",
      cellRenderer: 'actions'
    }
  ]

  paginationInfo = {
    pagination: true,
    paginationPageSize: 5,
    paginationPageSizeSelector: [5, 10]
  }
}

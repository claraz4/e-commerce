import {Component, inject} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {themeQuartz, type ColDef } from 'ag-grid-community';
import {StatusChipComponent} from '../status-chip/status-chip.component';
import {ActionButtonComponent} from '../action-button/action-button.component';
import {IProductAdmin} from '../../../models/IProductAdmin';
import {ProductsService} from '../../../../all-products/services/products.service';

@Component({
  selector: 'app-admin-products-view',
  imports: [
    AgGridAngular
  ],
  templateUrl: './admin-products-view.html',
  styleUrl: './admin-products-view.scss'
})
export class AdminProductsView {
  private productsService = inject(ProductsService);

  rowData: IProductAdmin[] = [];

  constructor() {
    this.productsService.getAllProductsAdmin().subscribe({
      next: data => this.rowData = data.products
    })
  }

  myComponents= {
    'status': StatusChipComponent,
    'actions': ActionButtonComponent
  }

  colDefs: ColDef[] = [
    {
      field: "id",
      sortable: false,
      flex: 0.8
    },
    {
      field: "title",
      sortable: true,
      flex: 3,
      cellStyle: {
        fontWeight: '500'
      }
    },
    {
      field: "description",
      sortable: false,
      editable: true,
      flex: 4,
      wrapText: true,
      autoHeight: true,
      cellStyle: {
        padding: "5px 10px",
        lineHeight: "25px"
      }
    },
    {
      field: "price",
      valueFormatter: p => '$' + p.value.toLocaleString(),
      sortable: true,
      flex: 1.5
    },
    {
      field: "stock",
      sortable: true,
      flex: 1
    },
    {
      field: "availabilityStatus",
      sortable: true,
      cellRenderer: 'status',
      flex: 2.3,
      cellStyle: {
        padding: "10px",
      },
      autoHeight: true
    },
    {
      field: "actions",
      cellRenderer: 'actions',
      cellRendererParams: {
        onButtonClick: this.handleDeleteProduct.bind(this)
      },
      flex: 2
    }
  ]

  defaultColDef: ColDef = {
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    headerClass: 'header-class'
  };

  paginationInfo = {
    pagination: true,
    paginationPageSize: 10,
    paginationPageSizeSelector: [5, 10]
  }
  protected readonly myTheme = myTheme;

  handleDeleteProduct(id: number) {
    this.rowData = this.rowData.filter(item => item.id !== id);
  }
}

const myTheme = themeQuartz.withParams({
  fontFamily: "serif",
  headerFontFamily: "Poppins",
  cellFontFamily: "Poppins",
  headerBackgroundColor: "#FBC0CE",
  oddRowBackgroundColor: 'rgb(0, 0, 0, 0.02)',
  rowHoverColor: "rgba(255,195,207,0.3)",
  inputFocusBorder: "red"
});

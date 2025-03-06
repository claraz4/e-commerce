import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: any;
  legend: any;
};

@Component({
  selector: 'app-customers-pie',
  imports: [
    ChartComponent
  ],
  templateUrl: './customers-pie.component.html',
  styleUrl: './customers-pie.component.scss'
})
export class CustomersPieComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [139, 423],
      chart: {
        type: "donut",
        height: 300,
        width: 300,
        fontFamily: 'Poppins'
      },
      labels: ["New Customers", "Old Customers"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      colors: ['#44DBF4', '#F63D68'],
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: 17,
        itemMargin: {
          horizontal: 50
        }
      },
    };
  }
}

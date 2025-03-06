import {Component, ViewChild} from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-weekly-sales-comparison",
  templateUrl: "./weekly-sales-comparison.component.html",
  imports: [
    ChartComponent
  ],
  styleUrls: ["./weekly-sales-comparison.component.scss"]
})
export class WeeklySalesComparisonComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Last Week Revenues",
          data: [10, 41, 35, 51, 49, 62, 69],
          color: '#44DBF4'
        },
        {
          name: "Next Week Revenues",
          data: [49, 62, 69, 10, 41, 35, 51],
          color: '#F63D68'
        }
      ],
      chart: {
        height: 300,
        width: 400,
        fontFamily: 'Poppins',
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Mon",
          "Tue",
          "Wed",
          "Thur",
          "Fri",
          "Sat",
          "Sun"
        ]
      }
    };
  }
}


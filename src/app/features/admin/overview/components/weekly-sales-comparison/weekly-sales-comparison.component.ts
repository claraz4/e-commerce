import { Component, ViewChild } from '@angular/core';
import {
  ChartConfiguration,
  Chart,
  ChartType,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title, Tooltip, Legend, LineController, Scale
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  annotationPlugin
);

@Component({
  selector: 'app-weekly-sales-comparison',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './weekly-sales-comparison.component.html',
  styleUrl: './weekly-sales-comparison.component.scss'
})
export class WeeklySalesComparisonComponent {
  fontFamily: string = "Poppins";

  lastWeekMain: string = '#44DBF4';
  lastWeekDark: string = '#087688';
  thisWeekMain: string = '#F63D68';
  thisWeekDark: string = '#900928';

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [814, 1398, 2432, 365, 523, 3212, 3953],
        label: 'Last Week',
        backgroundColor: this.lastWeekMain,
        borderColor: this.lastWeekMain,
        pointBackgroundColor: this.lastWeekDark,
        pointBorderColor: this.lastWeekDark,
        pointHoverBackgroundColor: this.lastWeekDark,
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [723, 253, 2121, 1909, 1523, 2856, 3032],
        label: 'This Week',
        backgroundColor: this.thisWeekMain,
        borderColor: this.thisWeekMain,
        pointBackgroundColor: this.thisWeekDark,
        pointBorderColor: this.thisWeekDark,
        pointHoverBackgroundColor: this.thisWeekDark,
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      }
    ],
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 19,
            family: this.fontFamily,
            weight: 'normal'
          }
        }
      },
      y: {
        position: 'left',
        ticks: {
          font: {
            family: this.fontFamily,
            size: 16,
            weight: 'normal',
            lineHeight: 1.2,
          },
          callback: function(value: string | number) {
            return '$' + value;
          },
        },
      }
    },

    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            family: this.fontFamily,
            size: 16,
            weight: 'normal',
          },
          boxWidth: 12,
          boxHeight: 10,
        },
      },
      annotation: {
        annotations: [],
      },

    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
}

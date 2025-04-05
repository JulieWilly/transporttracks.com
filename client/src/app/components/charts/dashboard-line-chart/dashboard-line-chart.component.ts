import { Component } from '@angular/core';
import {
  provideCharts,
  withDefaultRegisterables,
  BaseChartDirective,
} from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard-line-chart',
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './dashboard-line-chart.component.html',
  styleUrl: './dashboard-line-chart.component.css',
})
export class DashboardLineChartComponent {
  // Chart data configuration
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
        label: 'Sales',
        borderColor: '#3F51B5',
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        fill: true,
      },
    ],
  };

  // Chart options
  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  };
}

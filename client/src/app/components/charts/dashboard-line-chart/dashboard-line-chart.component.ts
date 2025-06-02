import { Component, ViewChild } from '@angular/core';
import {
  provideCharts,
  withDefaultRegisterables,
  BaseChartDirective,
} from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent
} from 'chart.js';

@Component({
  selector: 'app-dashboard-line-chart',
  imports: [BaseChartDirective, BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  standalone: true,
  templateUrl: './dashboard-line-chart.component.html',
  styleUrl: './dashboard-line-chart.component.css',
})
export class DashboardLineChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;
  // Chart data configuration
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'August',
      'September',
      'Octomber',
      'November',
      'December',
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 50, 43, 70, 49, 80, 91, 64],
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

  // bar chart.
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end',
      // },
    },
  };

  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    ],
    
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }
}

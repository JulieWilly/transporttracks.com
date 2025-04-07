import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { DashboardCardComponent } from '../HomeComponets/dashboard-card/dashboard-card.component';
import { BOOKINGS } from './data/dashboardDt';
import { DashboardLineChartComponent } from '../../../../components/charts/dashboard-line-chart/dashboard-line-chart.component';

@Component({
  selector: 'app-home',
  imports: [
    AboutComponent,
    DashboardCardComponent,
    DashboardLineChartComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // dashboard cards data.
  dashCardsItems = BOOKINGS;
}

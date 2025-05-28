import { Component } from '@angular/core';
import { DashboardCardComponent } from '../HomeComponets/dashboard-card/dashboard-card.component';
import { BOOKINGS } from './data/dashboardDt';
import { BOOKING_PROGRESS } from './data/bookingProgressItems';
import { DashboardLineChartComponent } from '../../../../components/charts/dashboard-line-chart/dashboard-line-chart.component';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { Card2Component } from '../../../ReuseableComponents/card2/card2.component';
@Component({
  selector: 'app-home',
  imports: [
    DashboardCardComponent,
    DashboardLineChartComponent,
    QuickNavigationComponent,
    Card2Component,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // dashboard cards data.
  dashCardsItems = BOOKINGS;
  bookingProgressData = BOOKING_PROGRESS;
  currentUser: string = 'Lord Wilfred';
  currentPage: string = 'Dashboard';
}

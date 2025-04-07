import { Routes } from '@angular/router';
import { SignInComponent } from './core/auth/sign-in/sign-in.component';
import { HomeComponent } from './features/feature-2/HomeSection/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MinimalLayoutComponent } from './layouts/minimal-layout/minimal-layout.component';
import { ForgotPasswordComponent } from './core/auth/forgot-password/forgot-password.component';
import { BookingRegisterComponent } from './features/feature-2/HomeSection/booking/booking-register/booking-register.component';
import { BookingListComponent } from './features/feature-2/HomeSection/booking/booking-list/booking-list.component';
import { AdvanceBookingRegisterComponent } from './features/feature-2/HomeSection/booking/advance-booking-register/advance-booking-register.component';
import { BookingOrderComponent } from './features/feature-2/HomeSection/booking/booking-order/booking-order.component';
import { DateWiseBulkBookingPrintComponent } from './features/feature-2/HomeSection/booking/date-wise-bulk-booking-print/date-wise-bulk-booking-print.component';
import { BulkBookingPrintMahagoenkarComponent } from './features/feature-2/HomeSection/booking/bulk-booking-print-mahagoenkar/bulk-booking-print-mahagoenkar.component';
import { BulkBookingPrintAayushComponent } from './features/feature-2/HomeSection/booking/bulk-booking-print-aayush/bulk-booking-print-aayush.component';
import { BulkBookingPrintLokenathExpressComponent } from './features/feature-2/HomeSection/booking/bulk-booking-print-lokenath-express/bulk-booking-print-lokenath-express.component';
import { MarketingComponent } from './features/feature-2/HomeSection/booking/marketing/marketing.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Common/sign-in',
    pathMatch: 'full',
  },
  {
    path: 'Common',
    component: MinimalLayoutComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
    ],
  },
  {
    path: 'Common',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      {
        path: 'booking_register',
        component: BookingRegisterComponent,
      },
      {
        path: 'booking_list',
        component: BookingListComponent,
      },
      {
        path: 'advancebookings/advance_bookings',
        component: AdvanceBookingRegisterComponent,
      },
      {
        path: 'bookingorder/manage_booking_orders',
        component: BookingOrderComponent,
      },
      {
        path: 'booking/date_wise_booking_print',
        component: DateWiseBulkBookingPrintComponent,
      },
      {
        path: 'booking/date_wise_booking_print_mahagoenkar',
        component: BulkBookingPrintMahagoenkarComponent,
      },
      {
        path: 'booking/date_wise_booking_print_aayush',
        component: BulkBookingPrintAayushComponent,
      },
      {
        path: 'booking/date_wise_booking_print_lokenath_express',
        component: BulkBookingPrintLokenathExpressComponent,
      },
      {
        path: 'marketing/dashboard',
        component: MarketingComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'Common/sign-in' },
];

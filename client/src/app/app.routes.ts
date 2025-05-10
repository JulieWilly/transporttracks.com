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
import { ManifestRegisterComponent } from './features/feature-2/loading/loading/manifest-register/manifest-register.component';
import { ManifestTransitRegisterComponent } from './features/feature-2/loading/loading/manifest-transit-register/manifest-transit-register.component';
import { VehicleRegisterComponent } from './features/feature-2/loading/loading/vehicle-register/vehicle-register.component';
import { ManageLoadingSlipsComponent } from './features/feature-2/loading/loading/manage-loading-slips/manage-loading-slips.component';
import { VehicleHireRegisterComponent } from './features/feature-2/loading/loading/vehicle-hire-register/vehicle-hire-register.component';
import { LocalVehicleHireRegisterComponent } from './features/feature-2/loading/loading/local-vehicle-hire-register/local-vehicle-hire-register.component';
import { FullLoadVehicleHireRegisterComponent } from './features/feature-2/loading/loading/full-load-vehicle-hire-register/full-load-vehicle-hire-register.component';
import { DriverRegisterComponent } from './features/feature-2/loading/loading/driver-register/driver-register.component';
import { PetrolPumpRegisterComponent } from './features/feature-2/loading/loading/petrol-pump-register/petrol-pump-register.component';
import { VehicleVendorsComponent } from './features/feature-2/loading/loading/vehicle-vendors/vehicle-vendors.component';
import { VehicleExpenseManagementComponent } from './features/feature-2/loading/loading/vehicle-expense-management/vehicle-expense-management.component';
import { VehicleInTransitFtlComponent } from './features/feature-2/loading/loading/vehicle-in-transit-ftl/vehicle-in-transit-ftl.component';
import { VehicleServiceMaintenanceComponent } from './features/feature-2/loading/loading/vehicle-service-maintenance/vehicle-service-maintenance.component';
import { ManageFuelPaymentsComponent } from './features/feature-2/loading/loading/manage-fuel-payments/manage-fuel-payments.component';
import { OutstationDispatchComponent } from './features/feature-2/dispatch/outstation-dispatch/outstation-dispatch.component';
import { DispatchRegisterReportComponent } from './features/feature-2/dispatch/dispatch-register-report/dispatch-register-report.component';
import { UnloadConsignmentComponent } from './features/feature-2/receive/unload-consignment/unload-consignment.component';
import { UnloadConsignmentMultiLocationComponent } from './features/feature-2/receive/unload-consignment-multi-location/unload-consignment-multi-location.component';
import { LorryArrivalRegisterComponent } from './features/feature-2/receive/lorry-arrival-register/lorry-arrival-register.component';
import { VehiclePendingPaymentsComponent } from './features/feature-2/receive/vehicle-pending-payments/vehicle-pending-payments.component';
import { LrConsignmentIncomingRegisterComponent } from './features/feature-2/receive/lr-consignment-incoming-register/lr-consignment-incoming-register.component';
import { FullLoadVehiclePendingPaymentsComponent } from './features/feature-2/receive/full-load-vehicle-pending-payments/full-load-vehicle-pending-payments.component';
import { IncomingBookingRegisterComponent } from './features/feature-2/receive/incoming-booking-register/incoming-booking-register.component';
import { GatepassRegisterComponent } from './features/feature-2/delivery/gatepass-register/gatepass-register.component';
import { PendingGatepassRegisterComponent } from './features/feature-2/delivery/pending-gatepass-register/pending-gatepass-register.component';
import { DeliveryRegisterComponent } from './features/feature-2/delivery/delivery-register/delivery-register.component';
import { GodownDeliveryComponent } from './features/feature-2/delivery/godown-delivery/godown-delivery.component';
import { FullLoadDeliveryRegisterComponent } from './features/feature-2/delivery/full-load-delivery-register/full-load-delivery-register.component';
import { DirectDeliveriesComponent } from './features/feature-2/delivery/direct-deliveries/direct-deliveries.component';
import { ThirdPartyDeliveryRegisterComponent } from './features/feature-2/delivery/third-party-delivery-register/third-party-delivery-register.component';
import { DoorThirdPartyDeliveryPendingPaymentsComponent } from './features/feature-2/delivery/door-third-party-delivery-pending-payments/door-third-party-delivery-pending-payments.component';
import { BarcodeDeliveryRegisterComponent } from './features/feature-2/delivery/barcode-delivery-register/barcode-delivery-register.component';
import { PaymentVouchersComponent } from './features/feature-2/accounts/payment-vouchers/payment-vouchers.component';
import { ManageSalesComponent } from './features/feature-2/accounts/manage-sales/manage-sales.component';
import { DebitNoteEntryComponent } from './features/feature-2/accounts/debit-note-entry/debit-note-entry.component';
import { CreditNoteEntryComponent } from './features/feature-2/accounts/credit-note-entry/credit-note-entry.component';
import { ManageExpensesComponent } from './features/feature-2/accounts/manage-expenses/manage-expenses.component';
import { PendingPaymentsComponent } from './features/feature-2/accounts/pending-payments/pending-payments.component';
import { BulkInvoicePrintComponent } from './features/feature-2/accounts/bulk-invoice-print/bulk-invoice-print.component';
import { ManageAccountGroupsComponent } from './features/feature-2/accounts/manage-account-groups/manage-account-groups.component';
import { JournalEntryComponent } from './features/feature-2/accounts/journal-entry/journal-entry.component';
import { BulkReceiveComponent } from './features/feature-2/accounts/bulk-receive/bulk-receive.component';
import { BulkPaymentsComponent } from './features/feature-2/accounts/bulk-payments/bulk-payments.component';
import { AccountsComponent } from './features/feature-2/accounts/accounts.component';
import { ManagePurchasesComponent } from './features/feature-2/accounts/manage-purchases/manage-purchases.component';
import { MoneyRecieptComponent } from './features/feature-2/accounts/money-reciept/money-reciept.component';
import { InvoicesComponent } from './features/feature-2/accounts/invoices/invoices.component';
import { ReportsComponent } from './features/feature-2/reports/reports.component';
import { SettingsComponent } from './features/feature-2/settings/settings.component';

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
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'Common/dashboard',
        component: HomeComponent,
      },
      // booking feature.
      {
        path: 'booking',
        children: [
          { path: 'booking_register', component: BookingRegisterComponent },
          { path: 'booking/list', component: BookingListComponent },
          {
            path: 'advance_bookings',
            component: AdvanceBookingRegisterComponent,
          },
          {
            path: 'bookingorder/manage_booking_orders',
            component: BookingOrderComponent,
          },
          {
            path: 'date_wise_booking_print',
            component: DateWiseBulkBookingPrintComponent,
          },
          {
            path: 'date_wise_booking_print_mahagoenkar',
            component: BulkBookingPrintMahagoenkarComponent,
          },
          {
            path: 'date_wise_booking_print_aayush',
            component: BulkBookingPrintAayushComponent,
          },
          {
            path: 'date_wise_booking_print_lokenath_express',
            component: BulkBookingPrintLokenathExpressComponent,
          },
        ],
      },

      // loading routes.
      {
        path: '',
        children: [
          {
            path: 'manifest/manifest_register',
            component: ManifestRegisterComponent,
          },
          {
            path: 'manifest/manifest_in_transit_register',
            component: ManifestTransitRegisterComponent,
          },
          {
            path: 'vehicle/register/manage_vehicle_register',
            component: VehicleRegisterComponent,
          },
          {
            path: 'loadingslip/manage_loading_slips',
            component: ManageLoadingSlipsComponent,
          },
          {
            path: 'vehiclehire/vehicle_hire_register',
            component: VehicleHireRegisterComponent,
          },
          {
            path: 'localVehicleHire/local_vehicle_hire_register',
            component: LocalVehicleHireRegisterComponent,
          },
          {
            path: 'vehiclehire/full_load_vehicle_hire_register',
            component: FullLoadVehicleHireRegisterComponent,
          },
          {
            path: 'vehiclehire/full_load_vehicle_hire_register',
            component: FullLoadVehicleHireRegisterComponent,
          },
          {
            path: 'driver/manage_drivers',
            component: DriverRegisterComponent,
          },
          {
            path: 'petrolpump/manage_petrol_pumps',
            component: PetrolPumpRegisterComponent,
          },
          {
            path: 'vehiclevendors/manage_vehicle_vendors',
            component: VehicleVendorsComponent,
          },
          {
            path: 'vehicleexpense/manage_vehicle_expenses',
            component: VehicleExpenseManagementComponent,
          },
          {
            path: 'ftlvehicletransit/manage_ftl_vehilce_in_transit',
            component: VehicleInTransitFtlComponent,
          },
          {
            path: 'vehicleservice/manage_vehicle_services',
            component: VehicleServiceMaintenanceComponent,
          },
          {
            path: 'fuelpayment/manage_fuel_payments',
            component: ManageFuelPaymentsComponent,
          },
        ],
      },

      //dispatch
      {
        path: 'dispatch',
        children: [
          {
            path: 'outstation_despatch',
            component: OutstationDispatchComponent,
          },
          {
            path: 'register-reports',
            component: DispatchRegisterReportComponent,
          },
        ],
      },

      // receive
      {
        path: '',
        children: [
          {
            path: 'despatch/despatch_list',
            component: UnloadConsignmentComponent,
          },
          {
            path: 'unload/unload_list',
            component: UnloadConsignmentMultiLocationComponent,
          },
          {
            path: 'arival/arrival_list',
            component: LorryArrivalRegisterComponent,
          },
          {
            path: 'vehiclepayments/manage_pending_payments',
            component: VehiclePendingPaymentsComponent,
          },
          {
            path: 'reports/lr_consignment_incoming_register',
            component: LrConsignmentIncomingRegisterComponent,
          },
          {
            path: 'vehiclepayments/full_load_vehicle_pending_payments',
            component: FullLoadVehiclePendingPaymentsComponent,
          },
          {
            path: 'booking/incoming_booking_register',
            component: IncomingBookingRegisterComponent,
          },
        ],
      },
      // delivery
      {
        path: 'delivery',
        children: [
          {
            path: 'gatepass/gatepass_register',
            component: GatepassRegisterComponent,
          },
          {
            path: 'gatepass/pending_gatepass_register',
            component: PendingGatepassRegisterComponent,
          },
          {
            path: 'delivery_register',
            component: DeliveryRegisterComponent,
          },
          {
            path: 'pending_delivery_list',
            component: GodownDeliveryComponent,
          },
          {
            path: 'full_load_delivery_register',
            component: FullLoadDeliveryRegisterComponent,
          },
          {
            path: 'quick_delivery_list',
            component: DirectDeliveriesComponent,
          },
          {
            path: 'doordelivery/door_delivery_register',
            component: ThirdPartyDeliveryRegisterComponent,
          },
          {
            path: 'doordeliverypayments/door_delivery_vehicle_pending_payments',
            component: DoorThirdPartyDeliveryPendingPaymentsComponent,
          },
          {
            path: 'barcodedelivery/barcode_delivery_register',
            component: BarcodeDeliveryRegisterComponent,
          },
        ],
      },
      {
        path: 'accounts',
        children: [
          {
            path: 'account_list',
            component: AccountsComponent,
          },
          {
            path: 'manage_purchases',
            component: ManagePurchasesComponent,
          },
          {
            path: 'manage_money_receipts',
            component: MoneyRecieptComponent,
          },
          {
            path: 'invoices/manage_invoice',
            component: InvoicesComponent,
          },
          {
            path: 'debitNotes/manage_debit_note_entries',
            component: DebitNoteEntryComponent,
          },
          {
            path: 'creditNotes/manage_credit_note_entries',
            component: CreditNoteEntryComponent,
          },
          {
            path: 'accountVoucher/manage_account_vouchers/manage_invoice',
            component: PaymentVouchersComponent,
          },
          {
            path: 'sale/manage_sales',
            component: ManageSalesComponent,
          },
          {
            path: 'pendingpayments/pending_payment_management',
            component: PendingPaymentsComponent,
          },
          {
            path: 'expenses/manage_expenses',
            component: ManageExpensesComponent,
          },
          {
            path: 'invoices/bulk_invoice_print',
            component: BulkInvoicePrintComponent,
          },
          {
            path: 'accountGroup/account_group_register',
            component: ManageAccountGroupsComponent,
          },
          {
            path: 'journal/manage_journal_entries',
            component: JournalEntryComponent,
          },
          {
            path: 'bulkreceive/manage_bulk_received_amounts',
            component: BulkReceiveComponent,
          },
          {
            path: 'bulkpayment/manage_bulk_payments',
            component: BulkPaymentsComponent,
          },
        ],
      },
      {
        path: 'marketing/dashboard',
        component: MarketingComponent,
      },
      {
        path: 'reports/managereports',
        component: ReportsComponent,
      },
      {
        path: 'settings/settingsmanagement',
        component: SettingsComponent,
      },
    ],
  },

  { path: '**', redirectTo: 'Common/sign-in' },
];

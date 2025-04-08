// src/app/core/constants/navigation-items.ts
export interface NavigationItem {
  id: string; // Unique string ID (e.g., "nav-home")
  numId: number; // Numeric identifier
  label: string;
  path: string;
  children?: NavigationItem[];
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'nav-home', numId: 1, label: 'Home', path: '/dashboard' },
  {
    id: 'nav-booking',
    numId: 2,
    label: 'Booking',
    path: 'booking',
    children: [
      {
        id: 'nav-booking-register',
        numId: 1,
        label: 'Booking Register',
        path: 'booking_register',
      },
      {
        id: 'nav-booking-list',
        numId: 2,
        label: 'Booking List',
        path: 'booking/list',
      },
      {
        id: 'nav-advance-booking-register',
        numId: 3,
        label: 'Advance Booking Register',
        path: 'advance_bookings',
      },
      {
        id: 'nav-booking-order',
        numId: 4,
        label: 'Booking Order',
        path: 'bookingorder/manage_booking_orders',
      },
      {
        id: 'nav-date-wise-bulk-booking-print',
        numId: 5,
        label: 'Date Wise Bulk Booking Print',
        path: 'date_wise_booking_print',
      },
      {
        id: 'nav-bulk-booking-print-mahagoenkar',
        numId: 6,
        label: 'Bulk Booking Print (Mahagoenkar)',
        path: 'date_wise_booking_print_mahagoenkar',
      },
      {
        id: 'nav-bulk-booking-print-aayush',
        numId: 7,
        label: 'Bulk Booking Print (Aayush)',
        path: 'date_wise_booking_print_aayush',
      },
      {
        id: 'nav-bulk-booking-print-lokenath',
        numId: 8,
        label: 'Bulk Booking Print (Lokenath Express)',
        path: 'date_wise_booking_print_lokenath_express',
      },
      {
        id: 'nav-marketing',
        numId: 9,
        label: 'Marketing',
        path: 'marketing/dashboard',
      },
    ],
  },
  {
    id: 'nav-loading',
    numId: 3,
    label: 'Loading',
    path: '',
    children: [
      {
        id: 'nav-manifest-register',
        numId: 1,
        label: 'Manifest Register',
        path: 'manifest/manifest_register',
      },
      {
        id: 'nav-manifest-transit-register',
        numId: 2,
        label: 'Manifest Transit Register',
        path: 'manifest/manifest_in_transit_register',
      },
      {
        id: 'nav-vehicle-register',
        numId: 3,
        label: 'Vehicle Register',
        path: 'vehicle/register/manage_vehicle_register',
      },
      {
        id: 'nav-manage-loading-slips',
        numId: 4,
        label: 'Manage Loading Slips',
        path: 'loadingslip/manage_loading_slips',
      },
      {
        id: 'nav-vehicle-hire-register',
        numId: 5,
        label: 'Vehicle Hire Register',
        path: 'vehiclehire/vehicle_hire_register',
      },
      {
        id: 'nav-local-vehicle-hire-register',
        numId: 6,
        label: 'Local Vehicle Hire Register',
        path: 'localVehicleHire/local_vehicle_hire_register',
      },
      {
        id: 'nav-full-load-vehicle-hire-register',
        numId: 7,
        label: 'Full Load Vehicle Hire Register',
        path: 'vehiclehire/full_load_vehicle_hire_register',
      },
      {
        id: 'nav-driver-register',
        numId: 8,
        label: 'Driver Register',
        path: 'driver/manage_drivers',
      },
      {
        id: 'nav-petrol-pump-register',
        numId: 9,
        label: 'Petrol Pump Register',
        path: 'petrolpump/manage_petrol_pumps',
      },
      {
        id: 'nav-vehicle-vendors',
        numId: 10,
        label: 'Vehicle Vendors',
        path: 'vehiclevendors/manage_vehicle_vendors',
      },
      {
        id: 'nav-vehicle-expense',
        numId: 11,
        label: 'Vehicle Expense Managers',
        path: 'vehicleexpense/manage_vehicle_expenses',
      },
      {
        id: 'nav-vehicle-in-transit',
        numId: 12,
        label: 'Vehicle In Transit',
        path: 'ftlvehicletransit/manage_ftl_vehilce_in_transit',
      },
      {
        id: 'nav-vehicle-service',
        numId: 12,
        label: 'Vehicle Service',
        path: 'vehicleservice/manage_vehicle_services',
      },
      {
        id: 'nav-manage-fuel-payment',
        numId: 12,
        label: 'Manage Fuel Payment',
        path: 'fuelpayment/manage_fuel_payments',
      },
    ],
  },
  {
    id: 'nav-dispatch',
    numId: 4,
    label: 'Dispatch',
    path: 'dispatch',
    children: [
      {
        id: 'nav-outstation-dispatch',
        numId: 1,
        label: 'Outstation Dispatch',
        path: 'outstation_despatch',
      },
      {
        id: 'nav-dispatch-register-report',
        numId: 2,
        label: 'Dispatch Register Report',
        path: 'register-reports',
      },
    ],
  },
  {
    id: 'nav-receive',
    numId: 5,
    label: 'Receive',
    path: '',
    children: [
      {
        id: 'nav-unload-consignment',
        numId: 1,
        label: 'Unload Consignment',
        path: 'despatch/despatch_list',
      },
      {
        id: 'nav-unload-consignment-multi-location',
        numId: 2,
        label: 'Unload Consignment (Multi Location)',
        path: 'unload/unload_list',
      },
      {
        id: 'nav-lorry-arrival-register',
        numId: 3,
        label: 'Lorry Arrival Register',
        path: 'arival/arrival_list',
      },
      {
        id: 'nav-vehicle-pending-payments',
        numId: 4,
        label: 'Vehicle Pending Payments',
        path: 'vehiclepayments/manage_pending_payments',
      },
      {
        id: 'nav-lr-consignment-incoming-register',
        numId: 5,
        label: 'LR/Consignment Incoming Register',
        path: 'reports/lr_consignment_incoming_register',
      },
      {
        id: 'nav-full-load-vehicle-pending-payments',
        numId: 6,
        label: 'Full Load Vehicle Pending Payments',
        path: 'vehiclepayments/full_load_vehicle_pending_payments',
      },
      {
        id: 'nav-incoming-booking-register',
        numId: 7,
        label: 'Incoming Booking Register',
        path: 'booking/incoming_booking_register',
      },
    ],
  },
  {
    id: 'nav-delivery',
    numId: 6,
    label: 'Delivery',
    path: 'delivery',
    children: [
      {
        id: 'nav-gatepass-register',
        numId: 1,
        label: 'Gatepass Register',
        path: 'gatepass/gatepass_register',
      },
      {
        id: 'nav-pending-gatepass-register',
        numId: 2,
        label: 'Pending Gatepass Register',
        path: 'gatepass/pending_gatepass_register',
      },
      {
        id: 'nav-delivery-register',
        numId: 3,
        label: 'Delivery Register',
        path: 'delivery_register',
      },
      {
        id: 'nav-godown-delivery',
        numId: 4,
        label: 'Godown Delivery',
        path: 'pending_delivery_list',
      },
      {
        id: 'nav-full-load-delivery-register',
        numId: 5,
        label: 'Full Load Delivery Register',
        path: 'full_load_delivery_register',
      },
      {
        id: 'nav-direct-deliveries',
        numId: 6,
        label: 'Direct Deliveries',
        path: 'quick_delivery_list',
      },
      {
        id: 'nav-third-party-delivery-register',
        numId: 7,
        label: 'Third Party Delivery Register',
        path: 'doordelivery/door_delivery_register',
      },
      {
        id: 'nav-door-third-party-delivery-pending-payments',
        numId: 8,
        label: 'Door/Third Party Delivery Pending Payments',
        path: 'doordeliverypayments/door_delivery_vehicle_pending_payments',
      },
      {
        id: 'nav-barcode-delivery-register',
        numId: 9,
        label: 'Barcode Delivery Register',
        path: 'barcodedelivery/barcode_delivery_register',
      },
    ],
  },
  {
    id: 'nav-accounting',
    numId: 7,
    label: 'Accounting',
    path: 'accounts',
    children: [
      {
        id: 'nav-accounts',
        numId: 1,
        label: 'Accounts',
        path: 'account_list',
      },
      {
        id: 'nav-manage-purchases',
        numId: 2,
        label: 'Manage Purchases',
        path: 'manage_purchases',
      },
      {
        id: 'nav-money-receipt',
        numId: 3,
        label: 'Money Receipt',
        path: 'manage_money_receipts',
      },
      {
        id: 'nav-invoices',
        numId: 4,
        label: 'Invoices',
        path: 'invoices/manage_invoice',
      },
      {
        id: 'nav-money-transfer-contra',
        numId: 5,
        label: 'Money Transfer (Contra)',
        path: 'accountVoucher/manage_account_vouchers/manage_invoice',
      },
      {
        id: 'nav-debit-note-entry',
        numId: 6,
        label: 'Debit Note Entry',
        path: 'debitNotes/manage_debit_note_entries',
      },
      {
        id: 'nav-credit-note-entry',
        numId: 7,
        label: 'Credit Note Entry',
        path: 'creditNotes/manage_credit_note_entries',
      },
      {
        id: 'nav-pending-payments',
        numId: 8,
        label: 'Pending Payments',
        path: 'pendingpayments/pending_payment_management',
      },
      {
        id: 'nav-payment-vouchers',
        numId: 9,
        label: 'Payment Vouchers',
        path: 'accountVoucher/manage_account_vouchers/manage_invoice',
      },
      {
        id: 'nav-manage-sales',
        numId: 10,
        label: 'Manage Sales',
        path: 'sale/manage_sales',
      },
      {
        id: 'nav-manage-expense',
        numId: 11,
        label: 'Manage Expense',
        path: 'expenses/manage_expenses',
      },
      {
        id: 'nav-manage-expense',
        numId: 12,
        label: 'Manage Expense',
        path: 'expenses/manage_expenses',
      },
      {
        id: 'nav-bulk-invoice-print',
        numId: 13,
        label: 'Bulk Invoice Print',
        path: 'invoices/bulk_invoice_print',
      },
      {
        id: 'nav-manage-accounts-group',
        numId: 14,
        label: 'Manange Account Groups',
        path: 'accountGroup/account_group_reg',
      },
      {
        id: 'nav-journal-entry',
        numId: 15,
        label: 'Jpurnal Extry',
        path: 'journal/manage_journal_entries',
      },
      {
        id: 'nav-bulk-receive',
        numId: 16,
        label: 'Bulk Receive',
        path: 'bulkreceive/manage_bulk_received_amounts',
      },
    ],
  },
  {
    id: 'nav-reports',
    numId: 8,
    label: 'Reports',
    path: '/reports',
    children: [
      {
        id: 'nav-reports-daily',
        numId: 81,
        label: 'Daily',
        path: '/reports/daily',
      },
      {
        id: 'nav-reports-weekly',
        numId: 82,
        label: 'Weekly',
        path: '/reports/weekly',
      },
    ],
  },
  { id: 'nav-settings', numId: 9, label: 'Settings', path: '/settings' },
];

// src/app/core/constants/navigation-items.ts
export interface NavigationItem {
  id: string; // Unique string ID (e.g., "nav-home")
  numId: number; // Numeric identifier
  label: string;
  path: string;
  children?: NavigationItem[];
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'nav-home', numId: 1, label: 'Home', path: '/Common/dashboard' },
  {
    id: 'nav-booking',
    numId: 2,
    label: 'Booking',
    path: '/Common/booking_register',
    children: [
      {
        id: 'nav-booking-register',
        numId: 1,
        label: 'Booking Register',
        path: '/Common/booking/register',
      },
      {
        id: 'nav-booking-list',
        numId: 2,
        label: 'Booking List',
        path: '/Common/booking/list',
      },
      {
        id: 'nav-advance-booking-register',
        numId: 3,
        label: 'Advance Booking Register',
        path: '/Common/booking/advance-register',
      },
      {
        id: 'nav-booking-order',
        numId: 4,
        label: 'Booking Order',
        path: '/Common/booking/order',
      },
      {
        id: 'nav-date-wise-bulk-booking-print',
        numId: 5,
        label: 'Date Wise Bulk Booking Print',
        path: '/Common/booking/date-wise-bulk-booking-print',
      },
      {
        id: 'nav-bulk-booking-print-mahagoenkar',
        numId: 6,
        label: 'Bulk Booking Print (Mahagoenkar)',
        path: '/Common/booking/bulk-booking-print-mahagoenkar',
      },
      {
        id: 'nav-bulk-booking-print-aayush',
        numId: 7,
        label: 'Bulk Booking Print (Aayush)',
        path: '/Common/booking/bulk-booking-print-aayush',
      },
      {
        id: 'nav-bulk-booking-print-lokenath',
        numId: 8,
        label: 'Bulk Booking Print (Lokenath Express)',
        path: '/Common/booking/bulk-booking-print-lokenath',
      },
      {
        id: 'nav-marketing',
        numId: 9,
        label: 'Marketing',
        path: '/Common/booking/marketing',
      },
    ],
  },
  {
    id: 'nav-loading',
    numId: 3,
    label: 'Loading',
    path: '/Common/loading',
    children: [
      {
        id: 'nav-manifest-register',
        numId: 1,
        label: 'Manifest Register',
        path: '/Common/loading/manifest-register',
      },
      {
        id: 'nav-manifest-transit-register',
        numId: 2,
        label: 'Manifest Transit Register',
        path: '/Common/loading/manifest-transit-register',
      },
      {
        id: 'nav-vehicle-register',
        numId: 3,
        label: 'Vehicle Register',
        path: '/Common/loading/vehicle-register',
      },
      {
        id: 'nav-manage-loading-slips',
        numId: 4,
        label: 'Manage Loading Slips',
        path: '/Common/loading/manage-loading-slips',
      },
      {
        id: 'nav-vehicle-hire-register',
        numId: 5,
        label: 'Vehicle Hire Register',
        path: '/Common/loading/vehicle-hire-register',
      },
      {
        id: 'nav-local-vehicle-hire-register',
        numId: 6,
        label: 'Local Vehicle Hire Register',
        path: '/Common/loading/local-vehicle-hire-register',
      },
      {
        id: 'nav-full-load-vehicle-hire-register',
        numId: 7,
        label: 'Full Load Vehicle Hire Register',
        path: '/Common/loading/full-load-vehicle-hire-register',
      },
      {
        id: 'nav-driver-register',
        numId: 8,
        label: 'Driver Register',
        path: '/Common/loading/driver-register',
      },
      {
        id: 'nav-petrol-pump-register',
        numId: 9,
        label: 'Petrol Pump Register',
        path: '/Common/loading/petrol-pump-register',
      },
      {
        id: 'nav-vehicle-vendors',
        numId: 10,
        label: 'Vehicle Vendors',
        path: '/Common/loading/vehicle-vendors',
      },
    ],
  },
  {
    id: 'nav-dispatch',
    numId: 4,
    label: 'Dispatch',
    path: '/Common/dispatch',
    children: [
      {
        id: 'nav-outstation-dispatch',
        numId: 1,
        label: 'Outstation Dispatch',
        path: '/Common/dispatch/outstation',
      },
      {
        id: 'nav-dispatch-register-report',
        numId: 2,
        label: 'Dispatch Register Report',
        path: '/Common/dispatch/register-report',
      },
    ],
  },
  {
    id: 'nav-receive',
    numId: 5,
    label: 'Receive',
    path: '/Common/receive',
    children: [
      {
        id: 'nav-unload-consignment',
        numId: 1,
        label: 'Unload Consignment',
        path: '/Common/receive/unload-consignment',
      },
      {
        id: 'nav-unload-consignment-multi-location',
        numId: 2,
        label: 'Unload Consignment (Multi Location)',
        path: '/Common/receive/unload-consignment-multi-location',
      },
      {
        id: 'nav-lorry-arrival-register',
        numId: 3,
        label: 'Lorry Arrival Register',
        path: '/Common/receive/lorry-arrival-register',
      },
      {
        id: 'nav-vehicle-pending-payments',
        numId: 4,
        label: 'Vehicle Pending Payments',
        path: '/Common/receive/vehicle-pending-payments',
      },
      {
        id: 'nav-lr-consignment-incoming-register',
        numId: 5,
        label: 'LR/Consignment Incoming Register',
        path: '/Common/receive/lr-consignment-incoming-register',
      },
      {
        id: 'nav-full-load-vehicle-pending-payments',
        numId: 6,
        label: 'Full Load Vehicle Pending Payments',
        path: '/Common/receive/full-load-vehicle-pending-payments',
      },
      {
        id: 'nav-incoming-booking-register',
        numId: 7,
        label: 'Incoming Booking Register',
        path: '/Common/receive/incoming-booking-register',
      },
    ],
  },
  {
    id: 'nav-delivery',
    numId: 6,
    label: 'Delivery',
    path: '/reports/delivery',
    children: [
      {
        id: 'nav-gatepass-register',
        numId: 1,
        label: 'Gatepass Register',
        path: '/Common/delivery/gatepass-register',
      },
      {
        id: 'nav-pending-gatepass-register',
        numId: 2,
        label: 'Pending Gatepass Register',
        path: '/Common/delivery/pending-gatepass-register',
      },
      {
        id: 'nav-delivery-register',
        numId: 3,
        label: 'Delivery Register',
        path: '/Common/delivery/delivery-register',
      },
      {
        id: 'nav-godown-delivery',
        numId: 4,
        label: 'Godown Delivery',
        path: '/Common/delivery/godown-delivery',
      },
      {
        id: 'nav-full-load-delivery-register',
        numId: 5,
        label: 'Full Load Delivery Register',
        path: '/Common/delivery/full-load-delivery-register',
      },
      {
        id: 'nav-direct-deliveries',
        numId: 6,
        label: 'Direct Deliveries',
        path: '/Common/delivery/direct-deliveries',
      },
      {
        id: 'nav-third-party-delivery-register',
        numId: 7,
        label: 'Third Party Delivery Register',
        path: '/Common/delivery/third-party-delivery-register',
      },
      {
        id: 'nav-door-third-party-delivery-pending-payments',
        numId: 8,
        label: 'Door/Third Party Delivery Pending Payments',
        path: '/Common/delivery/door-third-party-delivery-pending-payments',
      },
      {
        id: 'nav-barcode-delivery-register',
        numId: 9,
        label: 'Barcode Delivery Register',
        path: '/Common/delivery/barcode-delivery-register',
      },
    ],
  },
  {
    id: 'nav-accounting',
    numId: 7,
    label: 'Accounting',
    path: '/accounting',
    children: [
      {
        id: 'nav-accounts',
        numId: 1,
        label: 'Accounts',
        path: '/Common/accounting/accounts',
      },
      {
        id: 'nav-manage-purchases',
        numId: 2,
        label: 'Manage Purchases',
        path: '/Common/accounting/manage-purchases',
      },
      {
        id: 'nav-money-receipt',
        numId: 3,
        label: 'Money Receipt',
        path: '/Common/accounting/money-receipt',
      },
      {
        id: 'nav-invoices',
        numId: 4,
        label: 'Invoices',
        path: '/Common/accounting/invoices',
      },
      {
        id: 'nav-money-transfer-contra',
        numId: 5,
        label: 'Money Transfer (Contra)',
        path: '/Common/accounting/money-transfer-contra',
      },
      {
        id: 'nav-debit-note-entry',
        numId: 6,
        label: 'Debit Note Entry',
        path: '/Common/accounting/debit-note-entry',
      },
      {
        id: 'nav-credit-note-entry',
        numId: 7,
        label: 'Credit Note Entry',
        path: '/Common/accounting/credit-note-entry',
      },
      {
        id: 'nav-pending-payments',
        numId: 8,
        label: 'Pending Payments',
        path: '/Common/accounting/pending-payments',
      },
      {
        id: 'nav-payment-vouchers',
        numId: 9,
        label: 'Payment Vouchers',
        path: '/Common/accounting/payment-vouchers',
      },
      {
        id: 'nav-manage-sales',
        numId: 10,
        label: 'Manage Sales',
        path: '/Common/accounting/manage-sales',
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

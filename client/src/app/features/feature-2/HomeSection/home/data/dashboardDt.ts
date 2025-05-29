export interface BookingItem {
  id: number;
  cardTitle: string;
  amount: number;
  iconClass: string;
}

export const BOOKINGS: BookingItem[] = [
  {
    id: 1,
    cardTitle: 'All Bookings',
    amount: 2,
    iconClass: 'fa-solid fa-book fa-2x',
  },
  {
    id: 2,
    cardTitle: 'In Transit (PTL)',
    amount: 0,
    iconClass: 'fa-solid fa-truck-fast fa-2x',
  },
  {
    id: 3,
    cardTitle: 'In Transit (FTL)',
    amount: 0,
    iconClass: 'fa-solid fa-truck-moving fa-2x',
  },
  {
    id: 4,
    cardTitle: 'Lorry Arrival',
    amount: 0,
    iconClass: 'fa-solid fa-truck-arrow-right fa-2x',
  },
  {
    id: 5,
    cardTitle: 'Invoices',
    amount: 1,
    iconClass: 'fa-solid fa-file-invoice-dollar fa-2x',
  },
  {
    id: 6,
    cardTitle: 'Pending Invoices',
    amount: 1,
    iconClass: 'fa-solid fa-hourglass-half fa-2x',
  },
  {
    id: 7,
    cardTitle: 'Pending Deliveries (PTL)',
    amount: 0,
    iconClass: 'fa-solid fa-truck-clock fa-2x',
  },
  {
    id: 8,
    cardTitle: 'Delivered (PTL)',
    amount: 0,
    iconClass: 'fa-solid fa-circle-check fa-2x',
  },
  {
    id: 9,
    cardTitle: 'Pending Deliveries (FTL)',
    amount: 0,
    iconClass: 'fa-solid fa-clock fa-2x',
  },
  {
    id: 10,
    cardTitle: 'Delivered (FTL)',
    amount: 2,
    iconClass: 'fa-solid fa-box-open fa-2x',
  },
];


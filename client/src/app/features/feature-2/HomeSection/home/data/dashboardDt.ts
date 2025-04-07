export interface BookingItem {
  id: number;
  cardTitle: string;
  amount: number;
}

export const BOOKINGS: BookingItem[] = [
  { id: 1, cardTitle: 'All Bookings', amount: 2 },
  { id: 2, cardTitle: 'In Transit (PTL)', amount: 0 },
  { id: 3, cardTitle: 'In Transit (FTL)', amount: 0 },
  { id: 4, cardTitle: 'Lorry Arrival', amount: 0 },
  { id: 5, cardTitle: 'Invoices', amount: 1 },
  { id: 6, cardTitle: 'Pending Invoices', amount: 1 },
  { id: 7, cardTitle: 'Pending Deliveries (PTL)', amount: 0 },
  { id: 8, cardTitle: 'Delivered (PTL)', amount: 0 },
  { id: 9, cardTitle: 'Pending Deliveries (FTL)', amount: 0 },
  { id: 10, cardTitle: 'Delivered (FTL)', amount: 2 },
  // new data
];

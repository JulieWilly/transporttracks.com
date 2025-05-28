export interface BookingProgressItem {
  id: number;
  cardTitle: string;
  current: number;
  total: number;
}


export const BOOKING_PROGRESS: BookingProgressItem[] = [
  { id: 1, cardTitle: 'Delivery Status', current: 23, total: 60 },
  { id: 2, cardTitle: 'POD Upload (PTL)', current: 15, total: 15 },
  { id: 3, cardTitle: 'POD Upload (FTL)', current: 6, total: 8 },
  { id: 4, cardTitle: 'Advance Booking (PTL)', current: 0, total: 2 },
  { id: 5, cardTitle: 'Advance Booking (FTL)', current: 0, total: 0 },
  { id: 6, cardTitle: 'Eway Bill Expiry', current: 4, total: 2 }, // current could mean active expiring items
  { id: 7, cardTitle: 'Driver Doc Expiry', current: 1, total: 1 },
  { id: 8, cardTitle: 'Vehicle Doc Expiry', current: 0, total: 0 },
];
  
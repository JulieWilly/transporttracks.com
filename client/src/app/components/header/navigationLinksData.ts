// src/app/core/constants/navigation-items.ts
export interface NavigationItem {
  id: string;         // Unique string ID (e.g., "nav-home")
  numId: number;      // Numeric identifier
  label: string;
  path: string;
  children?: NavigationItem[];
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'nav-home', numId: 1, label: 'Home', path: '/home' },
  { id: 'nav-booking', numId: 2, label: 'Booking', path: '/booking' },
  { id: 'nav-loading', numId: 3, label: 'Loading', path: '/loading' },
  { id: 'nav-dispatch', numId: 4, label: 'Dispatch', path: '/dispatch' },
  { id: 'nav-receive', numId: 5, label: 'Receive', path: '/reports/receive' },
  { id: 'nav-delivery', numId: 6, label: 'Delivery', path: '/reports/delivery' },
  { id: 'nav-accounting', numId: 7, label: 'Accounting', path: '/accounting' },
  { id: 'nav-reports', numId: 8, label: 'Reports', path: '/reports', 
    children: [
      { id: 'nav-reports-daily', numId: 81, label: 'Daily', path: '/reports/daily' },
      { id: 'nav-reports-weekly', numId: 82, label: 'Weekly', path: '/reports/weekly' }
    ]
  },
  { id: 'nav-settings', numId: 9, label: 'Settings', path: '/settings' }
];
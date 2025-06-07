import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-local-vehicle-hire-register',
  imports: [
    QuickNavigationComponent,
    SharableSearchInputComponent,
    SharableTitleComponent,
    SharableTableComponent,
  ],
  templateUrl: './local-vehicle-hire-register.component.html',
  styleUrl: './local-vehicle-hire-register.component.css',
})
export class LocalVehicleHireRegisterComponent {
  placeholderText: string = 'Vehicle No';
  currentPage: string = 'Local Vehicle Hire Register';
  displayedColumns: string[] = [
    'slNo',
    'localHireNo',
    'localHireDate',
    'vehicleNo',
    'from',
    'to',
    'hireAmount',
    'paidAmount',
    'dueAmount',
    'payment',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'Sl No',
    localHireNo: 'Local Hire No',
    localHireDate: 'Local Hire Date',
    vehicleNo: 'Vehicle No',
    from: 'From',
    to: 'To',
    hireAmount: 'Hire Amt.',
    paidAmount: 'Paid Amt.',
    dueAmount: 'Due Amt.',
    payment: 'Payment',
    actions: 'Edit',
  };

  dataSource = new MatTableDataSource(localHireData);
}

export interface LocalHireRecord {
  slNo: number;
  localHireNo: string;
  localHireDate: string;
  vehicleNo: string;
  from: string;
  to: string;
  hireAmount: number;
  paidAmount: number;
  dueAmount: number;
  edit: string;
  payment: string;
}

export const localHireData: LocalHireRecord[] = [
  {
    slNo: 1,
    localHireNo: 'LH-001',
    localHireDate: '2025-06-01',
    vehicleNo: 'KA-01-AB-1234',
    from: 'Bangalore',
    to: 'Chennai',
    hireAmount: 15000,
    paidAmount: 5000,
    dueAmount: 10000,
    edit: 'Edit',
    payment: 'Pending',
  },
  {
    slNo: 2,
    localHireNo: 'LH-002',
    localHireDate: '2025-06-02',
    vehicleNo: 'KA-02-CD-5678',
    from: 'Hyderabad',
    to: 'Mumbai',
    hireAmount: 18000,
    paidAmount: 18000,
    dueAmount: 0,
    edit: 'Edit',
    payment: 'Paid',
  },
  {
    slNo: 3,
    localHireNo: 'LH-003',
    localHireDate: '2025-06-03',
    vehicleNo: 'TN-09-EF-9101',
    from: 'Chennai',
    to: 'Coimbatore',
    hireAmount: 12000,
    paidAmount: 4000,
    dueAmount: 8000,
    edit: 'Edit',
    payment: 'Partial',
  },
  {
    slNo: 4,
    localHireNo: 'LH-004',
    localHireDate: '2025-06-04',
    vehicleNo: 'MH-12-GH-2345',
    from: 'Pune',
    to: 'Nagpur',
    hireAmount: 20000,
    paidAmount: 15000,
    dueAmount: 5000,
    edit: 'Edit',
    payment: 'Partial',
  },
  {
    slNo: 5,
    localHireNo: 'LH-005',
    localHireDate: '2025-06-05',
    vehicleNo: 'AP-16-IJ-3456',
    from: 'Vizag',
    to: 'Hyderabad',
    hireAmount: 16000,
    paidAmount: 16000,
    dueAmount: 0,
    edit: 'Edit',
    payment: 'Paid',
  },
  {
    slNo: 6,
    localHireNo: 'LH-006',
    localHireDate: '2025-06-06',
    vehicleNo: 'KL-07-KL-7890',
    from: 'Kochi',
    to: 'Trivandrum',
    hireAmount: 14000,
    paidAmount: 7000,
    dueAmount: 7000,
    edit: 'Edit',
    payment: 'Partial',
  },
  {
    slNo: 7,
    localHireNo: 'LH-007',
    localHireDate: '2025-06-07',
    vehicleNo: 'TS-08-MN-1122',
    from: 'Warangal',
    to: 'Hyderabad',
    hireAmount: 10000,
    paidAmount: 10000,
    dueAmount: 0,
    edit: 'Edit',
    payment: 'Paid',
  },
  {
    slNo: 8,
    localHireNo: 'LH-008',
    localHireDate: '2025-06-08',
    vehicleNo: 'GJ-01-OP-3344',
    from: 'Ahmedabad',
    to: 'Surat',
    hireAmount: 13000,
    paidAmount: 3000,
    dueAmount: 10000,
    edit: 'Edit',
    payment: 'Pending',
  },
  {
    slNo: 9,
    localHireNo: 'LH-009',
    localHireDate: '2025-06-09',
    vehicleNo: 'RJ-14-QR-5566',
    from: 'Jaipur',
    to: 'Jodhpur',
    hireAmount: 17000,
    paidAmount: 17000,
    dueAmount: 0,
    edit: 'Edit',
    payment: 'Paid',
  },
  {
    slNo: 10,
    localHireNo: 'LH-010',
    localHireDate: '2025-06-10',
    vehicleNo: 'DL-01-ST-7788',
    from: 'Delhi',
    to: 'Agra',
    hireAmount: 19000,
    paidAmount: 10000,
    dueAmount: 9000,
    edit: 'Edit',
    payment: 'Partial',
  },
];

import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vehicle-pending-payments',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './vehicle-pending-payments.component.html',
  styleUrl: './vehicle-pending-payments.component.css',
})
export class VehiclePendingPaymentsComponent {
  currentPage: string = 'Manage Pending Payments';
  placeholderText: string = 'Vehicle No.';
  dataSource = new MatTableDataSource(hireRecords);
  displayedColumns: string[] = [
    'id',
    'hireDate',
    'vehicleNo',
    'ownerName',
    'driverName',
    'shippingCharge',
    'brokerCommission',
    'paidAmount',
    'dueAmount',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    id: 'SL No',
    hireDate: 'Hire Date',
    vehicleNo: 'Vehicle No',
    ownerName: 'Owner Name',
    driverName: 'Driver Name',
    shippingCharge: 'Sipping Charge',
    brokerCommission: 'Broker Commission',
    paidAmount: 'Paid Amount',
    dueAmount: 'Due Amount',
    actions: 'Action',
  };
}


export interface HireRecord {
  id: number;
  hireDate: string;
  vehicleNo: string;
  ownerName: string;
  driverName: string;
  shippingCharge: number;
  brokerCommission: number;
  paidAmount: number;
  dueAmount: number;
}

export const hireRecords: HireRecord[] = [
  {
    id: 1,
    hireDate: '2025-06-01',
    vehicleNo: 'TN01-AA-1234',
    ownerName: 'Ravi Kumar',
    driverName: 'Mohan D',
    shippingCharge: 12000,
    brokerCommission: 1000,
    paidAmount: 10000,
    dueAmount: 2000,
  },
  {
    id: 2,
    hireDate: '2025-06-02',
    vehicleNo: 'TN02-BB-5678',
    ownerName: 'Suresh B',
    driverName: 'Karthik P',
    shippingCharge: 15000,
    brokerCommission: 1500,
    paidAmount: 15000,
    dueAmount: 0,
  },
  {
    id: 3,
    hireDate: '2025-06-03',
    vehicleNo: 'TN03-CC-1111',
    ownerName: 'Anil Jain',
    driverName: 'Vikram R',
    shippingCharge: 17000,
    brokerCommission: 1200,
    paidAmount: 10000,
    dueAmount: 7000,
  },
  {
    id: 4,
    hireDate: '2025-06-04',
    vehicleNo: 'TN04-DD-2222',
    ownerName: 'Manoj S',
    driverName: 'Saravanan M',
    shippingCharge: 11000,
    brokerCommission: 800,
    paidAmount: 11000,
    dueAmount: 0,
  },
  {
    id: 5,
    hireDate: '2025-06-05',
    vehicleNo: 'TN05-EE-3333',
    ownerName: 'Kiran R',
    driverName: 'Raja V',
    shippingCharge: 14000,
    brokerCommission: 1000,
    paidAmount: 7000,
    dueAmount: 7000,
  },
  {
    id: 6,
    hireDate: '2025-06-06',
    vehicleNo: 'TN06-FF-4444',
    ownerName: 'Vijay L',
    driverName: 'Arjun N',
    shippingCharge: 18000,
    brokerCommission: 2000,
    paidAmount: 18000,
    dueAmount: 0,
  },
  {
    id: 7,
    hireDate: '2025-06-07',
    vehicleNo: 'TN07-GG-5555',
    ownerName: 'Prakash T',
    driverName: 'Sathish B',
    shippingCharge: 16000,
    brokerCommission: 1100,
    paidAmount: 15000,
    dueAmount: 1000,
  },
  {
    id: 8,
    hireDate: '2025-06-08',
    vehicleNo: 'TN08-HH-6666',
    ownerName: 'Ramesh V',
    driverName: 'Selva G',
    shippingCharge: 13000,
    brokerCommission: 900,
    paidAmount: 13000,
    dueAmount: 0,
  },
  {
    id: 9,
    hireDate: '2025-06-09',
    vehicleNo: 'TN09-II-7777',
    ownerName: 'Hari M',
    driverName: 'Gopal D',
    shippingCharge: 14500,
    brokerCommission: 1000,
    paidAmount: 10000,
    dueAmount: 4500,
  },
  {
    id: 10,
    hireDate: '2025-06-10',
    vehicleNo: 'TN10-JJ-8888',
    ownerName: 'Ganesh K',
    driverName: 'Shiva P',
    shippingCharge: 19000,
    brokerCommission: 1500,
    paidAmount: 19000,
    dueAmount: 0,
  },
];

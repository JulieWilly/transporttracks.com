import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { AddBtnComponent } from '../../../../ReuseableComponents/add-btn/add-btn.component';
import { StatementsBtnComponent } from '../../../../ReuseableComponents/statements-btn/statements-btn.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vehicle-expense-management',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    AddBtnComponent,
    StatementsBtnComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './vehicle-expense-management.component.html',
  styleUrl: './vehicle-expense-management.component.css',
})
export class VehicleExpenseManagementComponent {
  currentPage: string = 'Manage Vehicle Expenses';
  btnName: string = 'Add New';
  placeholderText: string = 'Name';

  displayedColumns: string[] = [
    'sl',
    'voucherNo',
    'date',
    'vehicle',
    'serviceType',
    'serviceCharge',
    'paid',
    'due',
    'remarks',
    'pay',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    sl: 'SL No',
    voucherNo: 'Voucher No',
    date: 'Date',
    vehicle: 'Vehicle',
    serviceType: 'Service Type',
    serviceCharge: 'Service Charge',
    paid: 'Paid',
    due: 'Due',
    remarks: 'Remarks',
    pay: 'Pay',
    actions: 'Actions',
  };

  dataSource = new MatTableDataSource(SERVICE_RECORDS);
}

export interface ServiceRecord {
  sl: number;
  voucherNo: string;
  date: string;
  vehicle: string;
  serviceType: string;
  serviceCharge: number;
  paid: number;
  due: number;
  pay: number;
  remarks: string;
}

export const SERVICE_RECORDS: ServiceRecord[] = [
  {
    sl: 1,
    voucherNo: 'VCH1001',
    date: '2025-06-01',
    vehicle: 'KA01AB1234',
    serviceType: 'Oil Change',
    serviceCharge: 1500,
    paid: 1500,
    due: 0,
    pay: 1277,
    remarks: 'Completed',
  },
  {
    sl: 2,
    voucherNo: 'VCH1002',
    date: '2025-06-02',
    vehicle: 'MH12XY4321',
    serviceType: 'Engine Repair',
    serviceCharge: 8000,
    paid: 3000,
    due: 5000,
    pay: 1277,
    remarks: 'Pending',
  },
  {
    sl: 3,
    voucherNo: 'VCH1003',
    date: '2025-06-03',
    vehicle: 'DL04MN8765',
    serviceType: 'Tire Replacement',
    serviceCharge: 4000,
    paid: 4000,
    due: 0,
    pay: 1277,
    remarks: 'Completed',
  },
  {
    sl: 4,
    voucherNo: 'VCH1004',
    date: '2025-06-04',
    vehicle: 'TN09KL9988',
    serviceType: 'Brake Inspection',
    serviceCharge: 1200,
    paid: 1200,
    due: 0,
    pay: 1277,
    remarks: 'Done',
  },
  {
    sl: 5,
    voucherNo: 'VCH1005',
    date: '2025-06-05',
    vehicle: 'AP31BZ4444',
    serviceType: 'Battery Replacement',
    serviceCharge: 5000,
    paid: 2500,
    due: 2500,
    pay: 1277,
    remarks: 'Half Paid',
  },
  {
    sl: 6,
    voucherNo: 'VCH1006',
    date: '2025-06-06',
    vehicle: 'GJ01LM3210',
    serviceType: 'Alignment',
    serviceCharge: 700,
    paid: 700,
    due: 0,
    pay: 1277,
    remarks: 'Completed',
  },
  {
    sl: 7,
    voucherNo: 'VCH1007',
    date: '2025-06-07',
    vehicle: 'RJ45AA2233',
    serviceType: 'AC Repair',
    serviceCharge: 4500,
    paid: 1000,
    due: 3500,
    pay: 1277,
    remarks: 'Due',
  },
  {
    sl: 8,
    voucherNo: 'VCH1008',
    date: '2025-06-08',
    vehicle: 'WB32TZ1001',
    serviceType: 'General Service',
    serviceCharge: 2000,
    paid: 2000,
    due: 0,
    pay: 1277,
    remarks: 'Done',
  },
  {
    sl: 9,
    voucherNo: 'VCH1009',
    date: '2025-06-09',
    vehicle: 'HR26UX8888',
    serviceType: 'Washing',
    serviceCharge: 500,
    paid: 500,
    due: 0,
    pay: 1277,
    remarks: 'Cleaned',
  },
  {
    sl: 10,
    voucherNo: 'VCH1010',
    date: '2025-06-10',
    vehicle: 'CH01GH5555',
    serviceType: 'Suspension Repair',
    serviceCharge: 6000,
    paid: 1000,
    due: 5000,
    pay: 1277,
    remarks: 'Follow-up Required',
  },
];

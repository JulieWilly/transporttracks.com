import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manage-expenses',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    StatementsBtnComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './manage-expenses.component.html',
  styleUrl: './manage-expenses.component.css',
})
export class ManageExpensesComponent {
  currentPage: string = 'Manage Expenses';
  statementName: string = 'Statements';
  btnName: string = 'Add New';
  placeholderText: string = 'Search by Name';

  dataSource = new MatTableDataSource(serviceTransactions);

  displayedColumns: string[] = [
    'slNo',
    'voucherNo',
    'date',
    'account',
    'serviceType',
    'serviceCharge',
    'paid',
    'pending',
    'reff',
    'remarks',
    'pay',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    voucherNo: 'Voucher No',
    date: 'Date',
    account: 'Account',
    serviceType: 'Service Type',
    serviceCharge: 'Service Charge',
    paid: 'Paid',
    pending: 'Pending',
    reff: 'Reff.',
    remarks: 'Remarks',
    pay: 'Pay',
    actions: 'Actions',
  };
}

interface ServiceTransaction {
  slNo: number;
  voucherNo: string;
  date: string;
  account: string;
  serviceType: string;
  serviceCharge: number;
  paid: number;
  pending: number;
  reff: string;
  pay: number;
  remarks: string;
}

const serviceTransactions: ServiceTransaction[] = [
  {
    slNo: 1,
    voucherNo: 'VN1001',
    date: '2025-06-01',
    account: 'Acme Corp',
    serviceType: 'Maintenance',
    serviceCharge: 1500,
    paid: 1000,
    pending: 500,
    reff: 'REF001',
    pay: 2000,
    remarks: 'First half paid',
  },
  {
    slNo: 2,
    voucherNo: 'VN1002',
    date: '2025-06-02',
    account: 'Beta Ltd',
    serviceType: 'Inspection',
    serviceCharge: 800,
    paid: 800,
    pending: 0,
    reff: 'REF002',
    pay: 2000,
    remarks: 'Fully paid',
  },
  {
    slNo: 3,
    voucherNo: 'VN1003',
    date: '2025-06-03',
    account: 'Gamma Inc',
    serviceType: 'Consultation',
    serviceCharge: 1200,
    paid: 600,
    pending: 600,
    reff: 'REF003',
    pay: 2000,
    remarks: 'Partial payment',
  },
  {
    slNo: 4,
    voucherNo: 'VN1004',
    date: '2025-06-04',
    account: 'Delta Co',
    serviceType: 'Repair',
    serviceCharge: 2000,
    paid: 2000,
    pending: 0,
    reff: 'REF004',
    pay: 2000,
    remarks: 'Cleared',
  },
  {
    slNo: 5,
    voucherNo: 'VN1005',
    date: '2025-06-05',
    account: 'Epsilon LLC',
    serviceType: 'Upgrade',
    serviceCharge: 1800,
    paid: 1000,
    pending: 800,
    pay: 2000,
    reff: 'REF005',
    remarks: 'Second payment pending',
  },
  {
    slNo: 6,
    voucherNo: 'VN1006',
    date: '2025-06-06',
    account: 'Zeta Solutions',
    serviceType: 'Support',
    serviceCharge: 500,
    paid: 500,
    pending: 0,
    reff: 'REF006',
    pay: 2000,
    remarks: 'Settled',
  },
  {
    slNo: 7,
    voucherNo: 'VN1007',
    date: '2025-06-07',
    account: 'Eta Enterprises',
    serviceType: 'Maintenance',
    serviceCharge: 1400,
    paid: 700,
    pending: 700,
    reff: 'REF007',
    pay: 2000,
    remarks: 'Pending confirmation',
  },
  {
    slNo: 8,
    voucherNo: 'VN1008',
    date: '2025-06-08',
    account: 'Theta Group',
    serviceType: 'Installation',
    serviceCharge: 1600,
    paid: 0,
    pending: 1600,
    reff: 'REF008',
    pay: 2000,
    remarks: 'Awaiting payment',
  },
  {
    slNo: 9,
    voucherNo: 'VN1009',
    date: '2025-06-09',
    account: 'Iota Systems',
    serviceType: 'Audit',
    serviceCharge: 1300,
    paid: 1300,
    pending: 0,
    reff: 'REF009',
    pay: 2000,
    remarks: 'Complete',
  },
  {
    slNo: 10,
    voucherNo: 'VN1010',
    date: '2025-06-10',
    account: 'Kappa Pvt Ltd',
    serviceType: 'Consulting',
    serviceCharge: 1900,
    paid: 900,
    pending: 1000,
    reff: 'REF010',
    pay: 2000,
    remarks: 'Payment in progress',
  },
];

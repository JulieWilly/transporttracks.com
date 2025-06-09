import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';

@Component({
  selector: 'app-payment-vouchers',
  imports: [
    QuickNavigationComponent,
    SharableSearchInputComponent,
    AddBtnComponent,
    StatementsBtnComponent,
    SharableTableComponent,
    SharableTitleComponent
  ],
  templateUrl: './payment-vouchers.component.html',
  styleUrl: './payment-vouchers.component.css',
})
export class PaymentVouchersComponent {
  currentPage: string = 'Manage Payment Vouchers';
  btnName: string = 'New Payment Voucher';
  statementName: string = 'Statements';
  placeholderText: string = 'Name / Invoice No';
  dataSource = new MatTableDataSource(PAYMENT_ENTRIES);
  displayedColumns: string[] = [
    'slNo',
    'date',
    'voucherNo',
    'paidTo',
    'paidBy',
    'cash',
    'credit',
    'bank',
    'invoice',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    date: 'Date',
    voucherNo: 'Voucher No',
    paidTo: 'Paid To',
    paidBy: 'Paid By',
    cash: 'Cash',
    credit: 'Credit',
    bank: 'Bank',
    invoice: 'Invoice',
    actions: 'Actions',
  };
}

export interface PaymentEntry {
  slNo: number;
  date: string;
  voucherNo: string;
  paidTo: string;
  paidBy: string;
  cash: number;
  credit: number;
  bank: string;
  invoice: string;
}



export const PAYMENT_ENTRIES: PaymentEntry[] = [
  {
    slNo: 1,
    date: '2025-06-01',
    voucherNo: 'V001',
    paidTo: 'John Traders',
    paidBy: 'Admin',
    cash: 5000,
    credit: 0,
    bank: 'HDFC',
    invoice: 'INV-1001',
  },
  {
    slNo: 2,
    date: '2025-06-02',
    voucherNo: 'V002',
    paidTo: 'Sara Textiles',
    paidBy: 'Manager',
    cash: 0,
    credit: 3000,
    bank: 'ICICI',
    invoice: 'INV-1002',
  },
  {
    slNo: 3,
    date: '2025-06-03',
    voucherNo: 'V003',
    paidTo: 'Raj Suppliers',
    paidBy: 'Cashier',
    cash: 7000,
    credit: 0,
    bank: 'SBI',
    invoice: 'INV-1003',
  },
  {
    slNo: 4,
    date: '2025-06-04',
    voucherNo: 'V004',
    paidTo: 'Smart Equipments',
    paidBy: 'Admin',
    cash: 0,
    credit: 4000,
    bank: 'Axis',
    invoice: 'INV-1004',
  },
  {
    slNo: 5,
    date: '2025-06-05',
    voucherNo: 'V005',
    paidTo: 'Green Supplies',
    paidBy: 'Finance',
    cash: 6000,
    credit: 0,
    bank: 'PNB',
    invoice: 'INV-1005',
  },
  {
    slNo: 6,
    date: '2025-06-06',
    voucherNo: 'V006',
    paidTo: 'BlueTech',
    paidBy: 'Admin',
    cash: 0,
    credit: 5000,
    bank: 'Yes Bank',
    invoice: 'INV-1006',
  },
  {
    slNo: 7,
    date: '2025-06-07',
    voucherNo: 'V007',
    paidTo: 'Skyline Pvt Ltd',
    paidBy: 'Finance',
    cash: 5500,
    credit: 0,
    bank: 'Kotak',
    invoice: 'INV-1007',
  },
  {
    slNo: 8,
    date: '2025-06-08',
    voucherNo: 'V008',
    paidTo: 'Advance Tools',
    paidBy: 'Manager',
    cash: 0,
    credit: 6200,
    bank: 'Canara',
    invoice: 'INV-1008',
  },
  {
    slNo: 9,
    date: '2025-06-09',
    voucherNo: 'V009',
    paidTo: 'Supreme Motors',
    paidBy: 'Admin',
    cash: 4800,
    credit: 0,
    bank: 'Union Bank',
    invoice: 'INV-1009',
  },
  {
    slNo: 10,
    date: '2025-06-10',
    voucherNo: 'V010',
    paidTo: 'Orbit Machines',
    paidBy: 'Cashier',
    cash: 0,
    credit: 7500,
    bank: 'BOB',
    invoice: 'INV-1010',
  },
];

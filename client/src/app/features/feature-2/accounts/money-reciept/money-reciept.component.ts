import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-money-reciept',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    SharableTableComponent,
    StatementsBtnComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
  ],
  templateUrl: './money-reciept.component.html',
  styleUrl: './money-reciept.component.css',
})
export class MoneyRecieptComponent {
  currentPage: string = 'Manage Money Receipts';
  statementName: string = 'Statements';
  btnName: string = 'Add New';
  placeholderText: string = 'Name or Invoice No';

  dataSource = new MatTableDataSource(moneyReceipts);

  displayedColumns: string[] = [
    'id',
    'date',
    'mrNo',
    'receivedFrom',
    'paidBy',
    'cash',
    'credit',
    'bank',
    'tds',
    'invoice',
    'actions'
  ];

  columnHeaders: Record<string, string> = {
    id: 'SL No',
    date: 'Date',
    mrNo: 'MR No',
    receivedFrom: 'Received From',
    paidBy: 'Paid by',
    cash: 'Cash',
    credit: 'Credit',
    bank: 'Bank',
    tds: 'TDS',
    invoice: 'Invoice',
  actions:'Actions'
  };
}

export interface MoneyReceipt {
  id: number;
  date: string;
  mrNo: string;
  receivedFrom: string;
  paidBy: string;
  cash: number;
  credit: number;
  bank: number;
  tds: number;
  invoice: string;
}

export const moneyReceipts: MoneyReceipt[] = [
  {
    id: 1,
    date: '2025-06-01',
    mrNo: 'MR001',
    receivedFrom: 'ABC Corp',
    paidBy: 'Cash',
    cash: 5000,
    credit: 0,
    bank: 0,
    tds: 100,
    invoice: 'INV001',
  },
  {
    id: 2,
    date: '2025-06-02',
    mrNo: 'MR002',
    receivedFrom: 'XYZ Pvt Ltd',
    paidBy: 'Bank',
    cash: 0,
    credit: 0,
    bank: 10000,
    tds: 200,
    invoice: 'INV002',
  },
  {
    id: 3,
    date: '2025-06-03',
    mrNo: 'MR003',
    receivedFrom: 'MNO Ltd',
    paidBy: 'Credit',
    cash: 0,
    credit: 7000,
    bank: 0,
    tds: 150,
    invoice: 'INV003',
  },
  {
    id: 4,
    date: '2025-06-04',
    mrNo: 'MR004',
    receivedFrom: 'Delta Traders',
    paidBy: 'Bank',
    cash: 0,
    credit: 0,
    bank: 8000,
    tds: 100,
    invoice: 'INV004',
  },
  {
    id: 5,
    date: '2025-06-05',
    mrNo: 'MR005',
    receivedFrom: 'Echo Inc',
    paidBy: 'Cash',
    cash: 4000,
    credit: 0,
    bank: 0,
    tds: 50,
    invoice: 'INV005',
  },
  {
    id: 6,
    date: '2025-06-06',
    mrNo: 'MR006',
    receivedFrom: 'Foxtrot Corp',
    paidBy: 'Credit',
    cash: 0,
    credit: 6000,
    bank: 0,
    tds: 120,
    invoice: 'INV006',
  },
  {
    id: 7,
    date: '2025-06-07',
    mrNo: 'MR007',
    receivedFrom: 'Golf Traders',
    paidBy: 'Bank',
    cash: 0,
    credit: 0,
    bank: 9000,
    tds: 180,
    invoice: 'INV007',
  },
  {
    id: 8,
    date: '2025-06-08',
    mrNo: 'MR008',
    receivedFrom: 'Hotel Ltd',
    paidBy: 'Cash',
    cash: 3000,
    credit: 0,
    bank: 0,
    tds: 70,
    invoice: 'INV008',
  },
  {
    id: 9,
    date: '2025-06-09',
    mrNo: 'MR009',
    receivedFrom: 'India Pvt Ltd',
    paidBy: 'Credit',
    cash: 0,
    credit: 7500,
    bank: 0,
    tds: 130,
    invoice: 'INV009',
  },
  {
    id: 10,
    date: '2025-06-10',
    mrNo: 'MR010',
    receivedFrom: 'Juliet Co',
    paidBy: 'Bank',
    cash: 0,
    credit: 0,
    bank: 11000,
    tds: 250,
    invoice: 'INV010',
  },
];

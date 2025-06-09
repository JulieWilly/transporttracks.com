import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-debit-note-entry',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    StatementsBtnComponent,
    AddBtnComponent,
    SharableTableComponent,
    SharableSearchInputComponent,
  ],
  templateUrl: './debit-note-entry.component.html',
  styleUrl: './debit-note-entry.component.css',
})
export class DebitNoteEntryComponent {
  currentPage: string = 'Manage Debit Note Entries';
  statementName: string = 'Statements';
  btnName: string = 'Add New';
  placeholderText:string = 'Name or Invoice No'
  displayedColumns: string[] = [
    'slNo',
    'date',
    'voucher',
    'debitTo',
    'narration',
    'debitAmount',
    'billNo',
    'refNo',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    date: 'Date',
    voucher: 'Voucher',
    debitTo: 'Debit To',
    narration: 'Narration',
    debitAmount: 'Debit Amount',
    billNo: 'Bill No',
    refNo: 'Reff. No',
    actions: 'Actions',
  };

  dataSource = new MatTableDataSource(DEBIT_VOUCHERS);
}

export interface DebitVoucher {
  slNo: number;
  date: string;
  voucher: string;
  debitTo: string;
  narration: string;
  debitAmount: number;
  billNo: string;
  refNo: string;
}

export const DEBIT_VOUCHERS: DebitVoucher[] = [
  {
    slNo: 1,
    date: '2025-06-01',
    voucher: 'DV001',
    debitTo: 'Office Expenses',
    narration: 'Stationery purchase',
    debitAmount: 1500,
    billNo: 'B-1001',
    refNo: 'R-5001',
  },
  {
    slNo: 2,
    date: '2025-06-02',
    voucher: 'DV002',
    debitTo: 'Maintenance',
    narration: 'AC Repair',
    debitAmount: 2400,
    billNo: 'B-1002',
    refNo: 'R-5002',
  },
  {
    slNo: 3,
    date: '2025-06-03',
    voucher: 'DV003',
    debitTo: 'Utilities',
    narration: 'Electricity Bill',
    debitAmount: 3200,
    billNo: 'B-1003',
    refNo: 'R-5003',
  },
];

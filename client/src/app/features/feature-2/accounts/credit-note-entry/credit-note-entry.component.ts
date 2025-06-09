import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-credit-note-entry',
  imports: [
    QuickNavigationComponent,
    StatementsBtnComponent,
    SharableTitleComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './credit-note-entry.component.html',
  styleUrl: './credit-note-entry.component.css',
})
export class CreditNoteEntryComponent {
  currentPage: string = ' Manage Credit Note Entries';
  placeholderText: string = 'Name or Invoice No';
  btnName: string = 'Add New';
  statementName:string = 'Statements'
  dataSource = new MatTableDataSource(CREDIT_VOUCHERS);
  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    date: 'Date',
    voucher: 'Voucher',
    creditTo: 'Credit To',
    narration: 'Narration',
    amount: 'Amount',
    billNo: 'Bill No',
    refNo: 'Reff No',
    actions: 'Actions',
  };
  displayedColumns: string[] = [
    'slNo',
    'date',
    'voucher',
    'creditTo',
    'narration',
    'amount',
    'billNo',
    'refNo',
    'actions',
  ];
}

export interface CreditVoucher {
  slNo: number;
  date: string;
  voucher: string;
  creditTo: string;
  narration: string;
  amount: number;
  billNo: string;
  refNo: string;
}


export const CREDIT_VOUCHERS: CreditVoucher[] = [
  {
    slNo: 1,
    date: '2025-06-01',
    voucher: 'CV001',
    creditTo: 'Sales Account',
    narration: 'Sale of goods',
    amount: 5000,
    billNo: 'B-2001',
    refNo: 'R-6001',
  },
  {
    slNo: 2,
    date: '2025-06-02',
    voucher: 'CV002',
    creditTo: 'Consulting Revenue',
    narration: 'Service payment',
    amount: 7500,
    billNo: 'B-2002',
    refNo: 'R-6002',
  },
  {
    slNo: 3,
    date: '2025-06-03',
    voucher: 'CV003',
    creditTo: 'Interest Income',
    narration: 'Interest received',
    amount: 1200,
    billNo: 'B-2003',
    refNo: 'R-6003',
  },
];


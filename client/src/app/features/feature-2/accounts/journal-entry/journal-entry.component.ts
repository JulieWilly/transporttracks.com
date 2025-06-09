import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-journal-entry',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './journal-entry.component.html',
  styleUrl: './journal-entry.component.css',
})
export class JournalEntryComponent {
  currentPage: string = 'Manage Journal Entries';
  btnName: string = 'Add New';
  placeholderText: string = 'Seach Here ...';

  dataSource = new MatTableDataSource(voucherTransactions);
  displayedColumns: string[] = [
    'slNo',
    'date',
    'voucherNo',
    'source',
    'transactions',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    date: 'Date',
    voucherNo: 'Voucher No',
    source: 'Source',
    transactions: 'Transactions',
    actions: 'Actions',
  };
}

interface VoucherTransaction {
  slNo: number;
  date: string;
  voucherNo: string;
  source: string;
  transactions: number;
}


const voucherTransactions: VoucherTransaction[] = [
  {
    slNo: 1,
    date: '2025-06-01',
    voucherNo: 'VCH001',
    source: 'Sales',
    transactions: 5,
  },
  {
    slNo: 2,
    date: '2025-06-02',
    voucherNo: 'VCH002',
    source: 'Purchase',
    transactions: 3,
  },
  {
    slNo: 3,
    date: '2025-06-03',
    voucherNo: 'VCH003',
    source: 'Payment',
    transactions: 4,
  },
  {
    slNo: 4,
    date: '2025-06-04',
    voucherNo: 'VCH004',
    source: 'Receipt',
    transactions: 2,
  },
  {
    slNo: 5,
    date: '2025-06-05',
    voucherNo: 'VCH005',
    source: 'Journal',
    transactions: 6,
  },
  {
    slNo: 6,
    date: '2025-06-06',
    voucherNo: 'VCH006',
    source: 'Contra',
    transactions: 1,
  },
  {
    slNo: 7,
    date: '2025-06-07',
    voucherNo: 'VCH007',
    source: 'Sales Return',
    transactions: 3,
  },
  {
    slNo: 8,
    date: '2025-06-08',
    voucherNo: 'VCH008',
    source: 'Purchase Return',
    transactions: 2,
  },
  {
    slNo: 9,
    date: '2025-06-09',
    voucherNo: 'VCH009',
    source: 'Adjustment',
    transactions: 4,
  },
  {
    slNo: 10,
    date: '2025-06-10',
    voucherNo: 'VCH010',
    source: 'Opening Balance',
    transactions: 1,
  },
];


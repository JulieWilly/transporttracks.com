import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { ShortDropDown1Component } from '../../../ReuseableComponents/short-drop-down-1/short-drop-down-1.component';
import { DateFromComponent } from '../../../ReuseableComponents/date-from/date-from.component';
import { DateToComponent } from '../../../ReuseableComponents/date-to/date-to.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { SearchBtnComponent } from '../../../ReuseableComponents/search-btn/search-btn.component';
import { MatTableDataSource } from '@angular/material/table';
import { SearchByComponent } from '../../../ReuseableComponents/search-by/search-by.component';

@Component({
  selector: 'app-manage-purchases',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    SharableSearchInputComponent,
    StatementsBtnComponent,
    AddBtnComponent,
    ShortDropDown1Component,
    DateFromComponent,
    DateToComponent,
    SharableTableComponent,
    SearchBtnComponent,
  ],
  templateUrl: './manage-purchases.component.html',
  styleUrl: './manage-purchases.component.css',
})
export class ManagePurchasesComponent {
  currentPage: string = ' Manage Purchases';
  btnName: string = 'New Purchase';
  dropDownInput: string[] = ['-- Status --', 'Paid', 'Due'];
  placeholderText:string = 'Purchase No / Supplier Name / Mobile No.';
  statementName:string = 'Statements';

  displayedColumns: string[] = [
    'id',
    'date',
    'invoiceNo',
    'sellerName',
    'term',
    'type',
    'billValue',
    'paid',
    'discount',
    'due',
    'payNow',
    'actions',
  ];

  columnHeaders: { [key: string]: string } = {
    id: 'SL No',
    date: 'Date',
    invoiceNo: 'Invoice No',
    sellerName: 'Seller Name',
    term: 'Term',
    type: 'Type',
    billValue: 'Bill Value',
    paid: 'Paid',
    discount: 'Dis.',
    due: 'Due',
    payNow: 'Pay Now',
    actions: 'Actions',
  };

  dataSource = new MatTableDataSource(purchaseBills);
}


export interface PurchaseBill {
  id: number;
  date: string;
  invoiceNo: string;
  sellerName: string;
  term: string;
  type: string;
  billValue: number;
  paid: number;
  discount: number;
  due: number;
}

export const purchaseBills: PurchaseBill[] = [
  {
    id: 1,
    date: '2025-06-01',
    invoiceNo: 'INV1001',
    sellerName: 'Alpha Traders',
    term: '30 Days',
    type: 'Credit',
    billValue: 15000,
    paid: 5000,
    discount: 500,
    due: 9500,
  },
  {
    id: 2,
    date: '2025-06-02',
    invoiceNo: 'INV1002',
    sellerName: 'Beta Corp',
    term: 'Cash',
    type: 'Cash',
    billValue: 10000,
    paid: 10000,
    discount: 0,
    due: 0,
  },
  {
    id: 3,
    date: '2025-06-03',
    invoiceNo: 'INV1003',
    sellerName: 'Gamma Pvt Ltd',
    term: '15 Days',
    type: 'Credit',
    billValue: 20000,
    paid: 10000,
    discount: 1000,
    due: 9000,
  },
  {
    id: 4,
    date: '2025-06-04',
    invoiceNo: 'INV1004',
    sellerName: 'Delta Supplies',
    term: '45 Days',
    type: 'Credit',
    billValue: 18000,
    paid: 6000,
    discount: 500,
    due: 11500,
  },
  {
    id: 5,
    date: '2025-06-05',
    invoiceNo: 'INV1005',
    sellerName: 'Echo Wholesalers',
    term: 'Cash',
    type: 'Cash',
    billValue: 9000,
    paid: 9000,
    discount: 0,
    due: 0,
  },
  {
    id: 6,
    date: '2025-06-06',
    invoiceNo: 'INV1006',
    sellerName: 'Foxtrot Mart',
    term: '30 Days',
    type: 'Credit',
    billValue: 12000,
    paid: 4000,
    discount: 200,
    due: 7800,
  },
  {
    id: 7,
    date: '2025-06-07',
    invoiceNo: 'INV1007',
    sellerName: 'Golf Hardware',
    term: '60 Days',
    type: 'Credit',
    billValue: 25000,
    paid: 10000,
    discount: 1000,
    due: 14000,
  },
  {
    id: 8,
    date: '2025-06-08',
    invoiceNo: 'INV1008',
    sellerName: 'Hotel Supplies Co.',
    term: '30 Days',
    type: 'Credit',
    billValue: 11000,
    paid: 3000,
    discount: 500,
    due: 7500,
  },
  {
    id: 9,
    date: '2025-06-09',
    invoiceNo: 'INV1009',
    sellerName: 'Iota Dealers',
    term: 'Cash',
    type: 'Cash',
    billValue: 8000,
    paid: 8000,
    discount: 0,
    due: 0,
  },
  {
    id: 10,
    date: '2025-06-10',
    invoiceNo: 'INV1010',
    sellerName: 'Juliet Partners',
    term: '30 Days',
    type: 'Credit',
    billValue: 22000,
    paid: 10000,
    discount: 2000,
    due: 10000,
  },
];


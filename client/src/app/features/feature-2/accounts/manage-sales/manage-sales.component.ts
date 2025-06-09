import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { ShortDropDown1Component } from '../../../ReuseableComponents/short-drop-down-1/short-drop-down-1.component';
import { DateFromComponent } from '../../../ReuseableComponents/date-from/date-from.component';
import { DateToComponent } from '../../../ReuseableComponents/date-to/date-to.component';
import { SearchBtnComponent } from '../../../ReuseableComponents/search-btn/search-btn.component';
import { MatTableDataSource } from '@angular/material/table';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';


@Component({
  selector: 'app-manage-sales',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    StatementsBtnComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    ShortDropDown1Component,
    DateFromComponent,
    DateToComponent,
    SearchBtnComponent,
    SharableTableComponent
  ],
  templateUrl: './manage-sales.component.html',
  styleUrl: './manage-sales.component.css',
})
export class ManageSalesComponent {
  currentPage: string = 'Manage Sales';
  statementName: string = 'Statements';
  btnName: string = 'Create New Sale';
  placeholderText: string = 'Invoice No/Customer Name/Mobile No';
  dropDownInput: string[] = ['--Status--', 'Paid', 'Due'];
  dataSource = new MatTableDataSource(invoiceCollectionData);

  displayedColumns: string[] = [
    'slNo',
    'date',
    'invoiceNo',
    'customer',
    'term',
    'billValue',
    'received',
    'discount',
    'due',
    'collect',
    'actions',
    'adjust',
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    date: 'Date',
    invoiceNo: 'Invoice No',
    customer: 'Customer',
    term: 'Term',
    billValue: 'Bill Value',
    received: 'Received',
    discount: 'Dis.',
    due: 'Due',
    collect: 'Collect',
    actions:'Actions',
    adjust: 'Adjust',
  };
}


interface InvoiceCollectionRecord {
  slNo: number;
  date: string;
  invoiceNo: string;
  customer: string;
  term: string;
  billValue: number;
  received: number;
  discount: number;
  due: number;
  collect: boolean;
  print: boolean;
  edit: boolean;
  adjust: boolean;
}


const invoiceCollectionData: InvoiceCollectionRecord[] = [
  {
    slNo: 1,
    date: '2025-06-01',
    invoiceNo: 'INV001',
    customer: 'Alpha Corp',
    term: 'Net 30',
    billValue: 12000,
    received: 8000,
    discount: 500,
    due: 3500,
    collect: true,
    print: true,
    edit: true,
    adjust: true,
  },
  {
    slNo: 2,
    date: '2025-06-02',
    invoiceNo: 'INV002',
    customer: 'Beta Ltd',
    term: 'COD',
    billValue: 9500,
    received: 9500,
    discount: 0,
    due: 0,
    collect: false,
    print: true,
    edit: true,
    adjust: false,
  },
  {
    slNo: 3,
    date: '2025-06-03',
    invoiceNo: 'INV003',
    customer: 'Gamma Inc',
    term: 'Net 15',
    billValue: 15000,
    received: 10000,
    discount: 0,
    due: 5000,
    collect: true,
    print: true,
    edit: true,
    adjust: true,
  },
  {
    slNo: 4,
    date: '2025-06-04',
    invoiceNo: 'INV004',
    customer: 'Delta Co',
    term: 'Net 45',
    billValue: 20000,
    received: 5000,
    discount: 1000,
    due: 14000,
    collect: true,
    print: true,
    edit: true,
    adjust: true,
  },
  {
    slNo: 5,
    date: '2025-06-05',
    invoiceNo: 'INV005',
    customer: 'Epsilon LLC',
    term: 'Net 30',
    billValue: 5000,
    received: 2500,
    discount: 0,
    due: 2500,
    collect: true,
    print: false,
    edit: true,
    adjust: true,
  },
  {
    slNo: 6,
    date: '2025-06-06',
    invoiceNo: 'INV006',
    customer: 'Zeta Pvt Ltd',
    term: 'COD',
    billValue: 8500,
    received: 8500,
    discount: 0,
    due: 0,
    collect: false,
    print: true,
    edit: false,
    adjust: false,
  },
  {
    slNo: 7,
    date: '2025-06-07',
    invoiceNo: 'INV007',
    customer: 'Eta Enterprises',
    term: 'Net 10',
    billValue: 4000,
    received: 1000,
    discount: 200,
    due: 2800,
    collect: true,
    print: true,
    edit: true,
    adjust: true,
  },
  {
    slNo: 8,
    date: '2025-06-08',
    invoiceNo: 'INV008',
    customer: 'Theta Group',
    term: 'Net 60',
    billValue: 30000,
    received: 15000,
    discount: 0,
    due: 15000,
    collect: true,
    print: true,
    edit: true,
    adjust: true,
  },
  {
    slNo: 9,
    date: '2025-06-09',
    invoiceNo: 'INV009',
    customer: 'Iota Services',
    term: 'Net 20',
    billValue: 7800,
    received: 7800,
    discount: 0,
    due: 0,
    collect: false,
    print: true,
    edit: false,
    adjust: false,
  },
  {
    slNo: 10,
    date: '2025-06-10',
    invoiceNo: 'INV010',
    customer: 'Kappa Traders',
    term: 'Net 15',
    billValue: 6500,
    received: 4500,
    discount: 0,
    due: 2000,
    collect: true,
    print: true,
    edit: true,
    adjust: true,
  },
];

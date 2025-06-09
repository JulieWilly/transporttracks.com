import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-invoices',
  imports: [
    QuickNavigationComponent,
    SharableSearchInputComponent,
    SharableTitleComponent,
    StatementsBtnComponent,
    AddBtnComponent,
    SharableTableComponent,
    CommonModule
  ],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css',
})
export class InvoicesComponent {
  currentPage: string = 'Manage Invoice';
  statementName: string = 'Pending Invoices';
  btnName: string = 'New Invoice';
  placeholderText: string = 'Invoice No/Manual No / Customer Name';

  displayedColumns: string[] = [
    'id',
    'invoiceNo',
    'invoiceDate',
    'customer',
    'collect',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    id: 'SL No',
    invoiceNo: 'Invoice No',
    invoiceDate: 'Invoice Date',
    customer: 'Customer',
    collect: 'Collect',
    actions:'Actions'
  };

  dataSource = new MatTableDataSource(invoiceSummaries);
}

export interface InvoiceSummary {
  id: number;
  invoiceNo: string;
  invoiceDate: string;
  customer: string;
}


export const invoiceSummaries: InvoiceSummary[] = [
  {
    id: 1,
    invoiceNo: 'INV001',
    invoiceDate: '2025-06-01',
    customer: 'ABC Corp',
  },
  {
    id: 2,
    invoiceNo: 'INV002',
    invoiceDate: '2025-06-02',
    customer: 'XYZ Ltd',
  },
  {
    id: 3,
    invoiceNo: 'INV003',
    invoiceDate: '2025-06-03',
    customer: 'MNO Pvt Ltd',
  },
  {
    id: 4,
    invoiceNo: 'INV004',
    invoiceDate: '2025-06-04',
    customer: 'Delta Enterprises',
  },
  {
    id: 5,
    invoiceNo: 'INV005',
    invoiceDate: '2025-06-05',
    customer: 'Echo Logistics',
  },
  {
    id: 6,
    invoiceNo: 'INV006',
    invoiceDate: '2025-06-06',
    customer: 'Foxtrot Co',
  },
  {
    id: 7,
    invoiceNo: 'INV007',
    invoiceDate: '2025-06-07',
    customer: 'Golf Inc',
  },
  {
    id: 8,
    invoiceNo: 'INV008',
    invoiceDate: '2025-06-08',
    customer: 'Hotel Supplies',
  },
  {
    id: 9,
    invoiceNo: 'INV009',
    invoiceDate: '2025-06-09',
    customer: 'India Exports',
  },
  {
    id: 10,
    invoiceNo: 'INV010',
    invoiceDate: '2025-06-10',
    customer: 'Juliet Trading',
  },
];

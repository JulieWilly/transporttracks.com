import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bulk-payments',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './bulk-payments.component.html',
  styleUrl: './bulk-payments.component.css',
})
export class BulkPaymentsComponent {
  currentPage: string = 'Manage Bulk Payments';
  btnName: string = 'Add New';
  placeholderText: string = 'Search Here...';

  dataSource = new MatTableDataSource(paymentMadeData);
  displayedColumns: string[] = [
    'slNo',
    'paymentDate',
    'paidTo',
    'paidAmount',
    'paymentMode',
    'actions' 
  ];
  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    paymentDate: 'Payment Date',
    paidTo: 'Paid To',
    paidAmount: 'Paid Amount',
    paymentMode: 'Payment Mode',
    actions:'Actions'
  };
}


interface PaymentMade {
  slNo: number;
  paymentDate: string;
  paidTo: string;
  paidAmount: number;
  paymentMode: string;
}


const paymentMadeData: PaymentMade[] = [
  {
    slNo: 1,
    paymentDate: '2025-06-01',
    paidTo: 'John Suppliers',
    paidAmount: 1200,
    paymentMode: 'Cash',
  },
  {
    slNo: 2,
    paymentDate: '2025-06-02',
    paidTo: 'XYZ Services',
    paidAmount: 5000,
    paymentMode: 'Bank Transfer',
  },
  {
    slNo: 3,
    paymentDate: '2025-06-03',
    paidTo: 'Alpha Transport',
    paidAmount: 2200,
    paymentMode: 'UPI',
  },
  {
    slNo: 4,
    paymentDate: '2025-06-04',
    paidTo: 'Beta Co.',
    paidAmount: 3300,
    paymentMode: 'Cheque',
  },
  {
    slNo: 5,
    paymentDate: '2025-06-05',
    paidTo: 'Omega Ltd.',
    paidAmount: 800,
    paymentMode: 'Cash',
  },
  {
    slNo: 6,
    paymentDate: '2025-06-06',
    paidTo: 'Gamma Group',
    paidAmount: 1500,
    paymentMode: 'UPI',
  },
  {
    slNo: 7,
    paymentDate: '2025-06-07',
    paidTo: 'Delta Corp.',
    paidAmount: 2750,
    paymentMode: 'Bank Transfer',
  },
  {
    slNo: 8,
    paymentDate: '2025-06-08',
    paidTo: 'Sigma Pvt Ltd',
    paidAmount: 1900,
    paymentMode: 'Cheque',
  },
  {
    slNo: 9,
    paymentDate: '2025-06-09',
    paidTo: 'Zeta Agency',
    paidAmount: 4500,
    paymentMode: 'Cash',
  },
  {
    slNo: 10,
    paymentDate: '2025-06-10',
    paidTo: 'Epsilon Ventures',
    paidAmount: 3050,
    paymentMode: 'UPI',
  },
];


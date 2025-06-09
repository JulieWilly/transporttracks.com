import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-bulk-receive',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './bulk-receive.component.html',
  styleUrl: './bulk-receive.component.css',
})
export class BulkReceiveComponent {
  currentPage: string = ' Manage Bulk Received Amounts';
  btnName: string = 'Add New';
  placeholderText: string = 'Search Here ....';

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = [
    'slNo',
    'receivedDate',
    'receivedFrom',
    'receivedAmount',
    'paymentMode',
    'actions'
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    receivedDate: 'Received Date',
    receivedFrom: 'Received From',
    receivedAmount: 'Received Amount',
    paymentMode: 'Payment Mode',
    actions:'Actions'
  };
}


interface PaymentReceived {
  slNo: number;
  receivedDate: string;
  receivedFrom: string;
  receivedAmount: number;
  paymentMode: string;
}


const paymentReceivedData: PaymentReceived[] = [
  {
    slNo: 1,
    receivedDate: '2025-06-01',
    receivedFrom: 'John Traders',
    receivedAmount: 1200,
    paymentMode: 'Cash',
  },
  {
    slNo: 2,
    receivedDate: '2025-06-02',
    receivedFrom: 'XYZ Ltd',
    receivedAmount: 5000,
    paymentMode: 'Bank Transfer',
  },
  {
    slNo: 3,
    receivedDate: '2025-06-03',
    receivedFrom: 'Alpha Corp',
    receivedAmount: 2200,
    paymentMode: 'UPI',
  },
  {
    slNo: 4,
    receivedDate: '2025-06-04',
    receivedFrom: 'Beta Group',
    receivedAmount: 3300,
    paymentMode: 'Cheque',
  },
  {
    slNo: 5,
    receivedDate: '2025-06-05',
    receivedFrom: 'Omega LLC',
    receivedAmount: 800,
    paymentMode: 'Cash',
  },
  {
    slNo: 6,
    receivedDate: '2025-06-06',
    receivedFrom: 'Gamma Traders',
    receivedAmount: 1500,
    paymentMode: 'UPI',
  },
  {
    slNo: 7,
    receivedDate: '2025-06-07',
    receivedFrom: 'Delta Inc.',
    receivedAmount: 2750,
    paymentMode: 'Bank Transfer',
  },
  {
    slNo: 8,
    receivedDate: '2025-06-08',
    receivedFrom: 'Sigma Co.',
    receivedAmount: 1900,
    paymentMode: 'Cheque',
  },
  {
    slNo: 9,
    receivedDate: '2025-06-09',
    receivedFrom: 'Zeta Supplies',
    receivedAmount: 4500,
    paymentMode: 'Cash',
  },
  {
    slNo: 10,
    receivedDate: '2025-06-10',
    receivedFrom: 'Epsilon Traders',
    receivedAmount: 3050,
    paymentMode: 'UPI',
  },
];

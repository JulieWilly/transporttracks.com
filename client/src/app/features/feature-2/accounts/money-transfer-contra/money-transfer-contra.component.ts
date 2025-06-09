import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-money-transfer-contra',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    StatementsBtnComponent,
    AddBtnComponent,
    SharableTableComponent,
  ],
  templateUrl: './money-transfer-contra.component.html',
  styleUrl: './money-transfer-contra.component.css',
})
export class MoneyTransferContraComponent {
  currentPage: string = 'Manage Account Vouchers';
  btnName: string = 'Add New';

  dataSource = new MatTableDataSource(TRANSACTION_DATA);
  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    date: 'Date',
    fromAccount: 'From Account',
    narration: 'Narration',
    toAccount: 'To Account',
    amount: 'Amount',
    actions:'Actions'
  };

  displayedColumns: string[] = [
    'slNo',
    'date',
    'fromAccount',
    'narration',
    'toAccount',
    'amount',
    'actions'
  ];
}

export interface TransactionRecord {
  slNo: number;
  date: string;
  fromAccount: string;
  narration: string;
  toAccount: string;
  amount: number;
}



export const TRANSACTION_DATA: TransactionRecord[] = [
  {
    slNo: 1,
    date: '2025-06-01',
    fromAccount: 'Cash',
    narration: 'Office Supplies',
    toAccount: 'Stationery Vendor',
    amount: 500,
  },
  {
    slNo: 2,
    date: '2025-06-02',
    fromAccount: 'Bank',
    narration: 'Utility Bill',
    toAccount: 'Electricity Co.',
    amount: 1200,
  },
  {
    slNo: 3,
    date: '2025-06-03',
    fromAccount: 'Bank',
    narration: 'Software License',
    toAccount: 'Tech Vendor',
    amount: 3200,
  },
  {
    slNo: 4,
    date: '2025-06-04',
    fromAccount: 'Cash',
    narration: 'Client Refund',
    toAccount: 'Client A',
    amount: 700,
  },
  {
    slNo: 5,
    date: '2025-06-05',
    fromAccount: 'Cash',
    narration: 'Maintenance',
    toAccount: 'Repair Services',
    amount: 950,
  },
  {
    slNo: 6,
    date: '2025-06-06',
    fromAccount: 'Bank',
    narration: 'Salary',
    toAccount: 'Employees',
    amount: 10000,
  },
  {
    slNo: 7,
    date: '2025-06-07',
    fromAccount: 'Cash',
    narration: 'Marketing',
    toAccount: 'Agency',
    amount: 3000,
  },
  {
    slNo: 8,
    date: '2025-06-08',
    fromAccount: 'Bank',
    narration: 'Internet Bill',
    toAccount: 'ISP',
    amount: 800,
  },
  {
    slNo: 9,
    date: '2025-06-09',
    fromAccount: 'Cash',
    narration: 'Transport',
    toAccount: 'Taxi Service',
    amount: 400,
  },
  {
    slNo: 10,
    date: '2025-06-10',
    fromAccount: 'Bank',
    narration: 'Office Rent',
    toAccount: 'Landlord',
    amount: 15000,
  },
];

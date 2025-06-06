import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { ExpandableTableComponent } from '../../../../ReuseableComponents/expandable-table/expandable-table.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-booking-register',
  imports: [
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatPaginatorModule,
    SharableSearchInputComponent,
    SharableTitleComponent,
    QuickNavigationComponent,
    ExpandableTableComponent,
    CommonModule,
  ],

  templateUrl: './booking-register.component.html',
  styleUrl: './booking-register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingRegisterComponent {
  displayedColumns: string[] = [
    'number',
    'cnNo',
    'consignor',
    'consignee',
    // 'fromViaTo',
    'payMode',
    'amount',
    // 'received',
    // 'discount',
    'due',
    'location',
    'invoice',
    'status',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    number: '#',
    cnNo: 'CN No.',
    consignor: 'Consignor',
    consignee: 'Consignee',
    payMode: 'Pay Mode',
    amount: 'Amount',
    received: 'Received',
    discount: 'Discount',
    due: 'Due',
    location: 'Location',
    invoice: 'Invoice',
    status: 'Status',
  };

  dataSource = new MatTableDataSource(CN_DATA);
  value = 'Clear me';
  currentPage:string = 'Booking Register';
}

export interface CNRecord {
  number: number;
  cnNo: string;
  consignor: string;
  consignee: string;
  fromViaTo: string;
  payMode: string;
  amount: number;
  received: number;
  discount: number;
  due: number;
  location: string;
  invoice: string;
  status: string;
}

const CN_DATA: CNRecord[] = [
  {
    number: 1,
    cnNo: 'CN10001',
    consignor: 'Alpha Traders',
    consignee: 'Beta Retail',
    fromViaTo: 'Nairobi - Thika - Murang’a',
    payMode: 'Prepaid',
    amount: 4200,
    received: 4000,
    discount: 100,
    due: 100,
    location: 'Nairobi',
    invoice: 'INV/2001 - 2025-05-01',
    status: 'Delivered',
  },
  {
    number: 2,
    cnNo: 'CN10002',
    consignor: 'Delta Corp',
    consignee: 'Gamma Warehouse',
    fromViaTo: 'Mombasa - Voi - Nairobi',
    payMode: 'To Pay',
    amount: 8500,
    received: 0,
    discount: 0,
    due: 8500,
    location: 'Mombasa',
    invoice: 'INV/2002 - 2025-05-02',
    status: 'Pending',
  },
  {
    number: 3,
    cnNo: 'CN10003',
    consignor: 'Epsilon Ltd',
    consignee: 'Zeta Distributors',
    fromViaTo: 'Kisumu - Kakamega - Eldoret',
    payMode: 'Prepaid',
    amount: 3700,
    received: 3700,
    discount: 50,
    due: 0,
    location: 'Kisumu',
    invoice: 'INV/2003 - 2025-05-03',
    status: 'Delivered',
  },
  {
    number: 4,
    cnNo: 'CN10004',
    consignor: 'Theta Ltd',
    consignee: 'Iota Retail',
    fromViaTo: 'Nakuru - Eldoret - Kitale',
    payMode: 'To Pay',
    amount: 12000,
    received: 8000,
    discount: 0,
    due: 4000,
    location: 'Nakuru',
    invoice: 'INV/2004 - 2025-05-04',
    status: 'In Transit',
  },
  {
    number: 5,
    cnNo: 'CN10005',
    consignor: 'Kappa Traders',
    consignee: 'Lambda Corp',
    fromViaTo: 'Thika - Nairobi - Machakos',
    payMode: 'Prepaid',
    amount: 5600,
    received: 5600,
    discount: 200,
    due: 0,
    location: 'Thika',
    invoice: 'INV/2005 - 2025-05-05',
    status: 'Delivered',
  },
  {
    number: 6,
    cnNo: 'CN10006',
    consignor: 'Mu Enterprises',
    consignee: 'Nu Distributors',
    fromViaTo: 'Eldoret - Kitale - Bungoma',
    payMode: 'To Pay',
    amount: 7000,
    received: 3500,
    discount: 0,
    due: 3500,
    location: 'Eldoret',
    invoice: 'INV/2006 - 2025-05-06',
    status: 'Pending',
  },
  {
    number: 7,
    cnNo: 'CN10007',
    consignor: 'Xi Logistics',
    consignee: 'Omicron Retail',
    fromViaTo: 'Mombasa - Nairobi - Kisumu',
    payMode: 'Prepaid',
    amount: 9300,
    received: 9300,
    discount: 300,
    due: 0,
    location: 'Mombasa',
    invoice: 'INV/2007 - 2025-05-07',
    status: 'Delivered',
  },
  {
    number: 8,
    cnNo: 'CN10008',
    consignor: 'Pi Ltd',
    consignee: 'Rho Warehouse',
    fromViaTo: 'Kakamega - Kisumu - Eldoret',
    payMode: 'To Pay',
    amount: 4000,
    received: 0,
    discount: 0,
    due: 4000,
    location: 'Kakamega',
    invoice: 'INV/2008 - 2025-05-08',
    status: 'Pending',
  },
  {
    number: 9,
    cnNo: 'CN10009',
    consignor: 'Sigma Traders',
    consignee: 'Tau Retail',
    fromViaTo: 'Nairobi - Machakos - Kitui',
    payMode: 'Prepaid',
    amount: 6000,
    received: 6000,
    discount: 0,
    due: 0,
    location: 'Nairobi',
    invoice: 'INV/2009 - 2025-05-09',
    status: 'Delivered',
  },
  {
    number: 10,
    cnNo: 'CN10010',
    consignor: 'Upsilon Corp',
    consignee: 'Phi Warehouse',
    fromViaTo: 'Nakuru - Eldoret - Kisumu',
    payMode: 'To Pay',
    amount: 11000,
    received: 6000,
    discount: 0,
    due: 5000,
    location: 'Nakuru',
    invoice: 'INV/2010 - 2025-05-10',
    status: 'In Transit',
  },
];

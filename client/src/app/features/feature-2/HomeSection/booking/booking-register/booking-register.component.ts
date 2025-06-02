import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';

// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { AfterViewInit, ViewChild } from '@angular/core';
// import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableDataSource, MatTableModule } from '@angular/material/table';
// import { dataset } from '../../../../../data/bkRegister';
// import { ConsignmentRecord } from '../../../../../Inrterfaces/bkRegisterInt';

import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
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
    SharableTableComponent,
  ],

  templateUrl: './booking-register.component.html',
  styleUrl: './booking-register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingRegisterComponent implements AfterViewInit {
  displayedColumns: string[] = [
    '#',
    'CN No',
    'Consignor',
    'Consignee',
    'From-Via-To',
    'Pay.',
    'Amount',
    'Rec.',
    'Dis.',
    'Due',
    'Location',
    'Inv. No/Dt',
    'Status',
    'Print',
    'Collect',
  ];

  dataSource = new MatTableDataSource(CN_DATA);
  value = 'Clear me';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface CNRecord {
  '#': number;
  'CN No': string;
  Consignor: string;
  Consignee: string;
  'From-Via-To': string;
  'Pay.': string;
  Amount: number;
  'Rec.': number;
  'Dis.': number;
  Due: number;
  Location: string;
  'Inv. No/Dt': string;
  Status: string;
  Print: boolean;
  Collect: boolean;
}

const CN_DATA: CNRecord[] = [
  {
    '#': 1,
    'CN No': 'CN10001',
    Consignor: 'Alpha Traders',
    Consignee: 'Beta Retail',
    'From-Via-To': 'Nairobi - Thika - Murang’a',
    'Pay.': 'Prepaid',
    Amount: 4200,
    'Rec.': 4000,
    'Dis.': 100,
    Due: 100,
    Location: 'Nairobi',
    'Inv. No/Dt': 'INV/2001 - 2025-05-01',
    Status: 'Delivered',
    Print: true,
    Collect: false,
  },
  {
    '#': 2,
    'CN No': 'CN10002',
    Consignor: 'Delta Corp',
    Consignee: 'Gamma Warehouse',
    'From-Via-To': 'Mombasa - Voi - Nairobi',
    'Pay.': 'To Pay',
    Amount: 8500,
    'Rec.': 0,
    'Dis.': 0,
    Due: 8500,
    Location: 'Mombasa',
    'Inv. No/Dt': 'INV/2002 - 2025-05-02',
    Status: 'Pending',
    Print: false,
    Collect: true,
  },
  {
    '#': 3,
    'CN No': 'CN10003',
    Consignor: 'Epsilon Ltd',
    Consignee: 'Zeta Distributors',
    'From-Via-To': 'Kisumu - Kakamega - Eldoret',
    'Pay.': 'Prepaid',
    Amount: 3700,
    'Rec.': 3700,
    'Dis.': 50,
    Due: 0,
    Location: 'Kisumu',
    'Inv. No/Dt': 'INV/2003 - 2025-05-03',
    Status: 'Delivered',
    Print: true,
    Collect: false,
  },
  {
    '#': 4,
    'CN No': 'CN10004',
    Consignor: 'Theta Ltd',
    Consignee: 'Iota Retail',
    'From-Via-To': 'Nakuru - Eldoret - Kitale',
    'Pay.': 'To Pay',
    Amount: 12000,
    'Rec.': 8000,
    'Dis.': 0,
    Due: 4000,
    Location: 'Nakuru',
    'Inv. No/Dt': 'INV/2004 - 2025-05-04',
    Status: 'In Transit',
    Print: false,
    Collect: true,
  },
  {
    '#': 5,
    'CN No': 'CN10005',
    Consignor: 'Kappa Traders',
    Consignee: 'Lambda Corp',
    'From-Via-To': 'Thika - Nairobi - Machakos',
    'Pay.': 'Prepaid',
    Amount: 5600,
    'Rec.': 5600,
    'Dis.': 200,
    Due: 0,
    Location: 'Thika',
    'Inv. No/Dt': 'INV/2005 - 2025-05-05',
    Status: 'Delivered',
    Print: true,
    Collect: false,
  },
  {
    '#': 6,
    'CN No': 'CN10006',
    Consignor: 'Mu Enterprises',
    Consignee: 'Nu Distributors',
    'From-Via-To': 'Eldoret - Kitale - Bungoma',
    'Pay.': 'To Pay',
    Amount: 7000,
    'Rec.': 3500,
    'Dis.': 0,
    Due: 3500,
    Location: 'Eldoret',
    'Inv. No/Dt': 'INV/2006 - 2025-05-06',
    Status: 'Pending',
    Print: false,
    Collect: true,
  },
  {
    '#': 7,
    'CN No': 'CN10007',
    Consignor: 'Xi Logistics',
    Consignee: 'Omicron Retail',
    'From-Via-To': 'Mombasa - Nairobi - Kisumu',
    'Pay.': 'Prepaid',
    Amount: 9300,
    'Rec.': 9300,
    'Dis.': 300,
    Due: 0,
    Location: 'Mombasa',
    'Inv. No/Dt': 'INV/2007 - 2025-05-07',
    Status: 'Delivered',
    Print: true,
    Collect: false,
  },
  {
    '#': 8,
    'CN No': 'CN10008',
    Consignor: 'Pi Ltd',
    Consignee: 'Rho Warehouse',
    'From-Via-To': 'Kakamega - Kisumu - Eldoret',
    'Pay.': 'To Pay',
    Amount: 4000,
    'Rec.': 0,
    'Dis.': 0,
    Due: 4000,
    Location: 'Kakamega',
    'Inv. No/Dt': 'INV/2008 - 2025-05-08',
    Status: 'Pending',
    Print: false,
    Collect: true,
  },
  {
    '#': 9,
    'CN No': 'CN10009',
    Consignor: 'Sigma Traders',
    Consignee: 'Tau Retail',
    'From-Via-To': 'Nairobi - Machakos - Kitui',
    'Pay.': 'Prepaid',
    Amount: 6000,
    'Rec.': 6000,
    'Dis.': 0,
    Due: 0,
    Location: 'Nairobi',
    'Inv. No/Dt': 'INV/2009 - 2025-05-09',
    Status: 'Delivered',
    Print: true,
    Collect: false,
  },
  {
    '#': 10,
    'CN No': 'CN10010',
    Consignor: 'Upsilon Corp',
    Consignee: 'Phi Warehouse',
    'From-Via-To': 'Nakuru - Eldoret - Kisumu',
    'Pay.': 'To Pay',
    Amount: 11000,
    'Rec.': 6000,
    'Dis.': 0,
    Due: 5000,
    Location: 'Nakuru',
    'Inv. No/Dt': 'INV/2010 - 2025-05-10',
    Status: 'In Transit',
    Print: false,
    Collect: true,
  },
];


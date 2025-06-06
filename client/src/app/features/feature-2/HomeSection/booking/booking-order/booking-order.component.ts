import { AfterViewInit, Component, NgModule, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-booking-order',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    FormsModule,
    MatIconModule,
    QuickNavigationComponent,
    SharableTitleComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
    CommonModule,
  ],
  templateUrl: './booking-order.component.html',
  styleUrl: './booking-order.component.css',
})
export class BookingOrderComponent {
  displayedColumns: string[] = [
    'slNo',
    'orderDate',
    'consignor',
    'total',
    'pending',
    'generated',
    'view',
    'actions',
  ];

  dataSource = new MatTableDataSource(BOOKING_ORDERS);
  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    orderDate: 'Order Date',
    consignor: 'Consignor',
    total: 'Total',
    pending: 'Pending',
    generated: 'Generated',
    view: 'View',
    actions: 'Actions',
  };
}

interface Order {
  slNo: number;
  orderDate: string;
  consignor: string;
  total: number;
  pending: number;
  generated: boolean;
}

const BOOKING_ORDERS: Order[] = [
  {
    slNo: 1,
    orderDate: '2024-06-01',
    consignor: 'ABC Logistics',
    total: 5000,
    pending: 1000,
    generated: true,
  },
  {
    slNo: 2,
    orderDate: '2024-06-02',
    consignor: 'XYZ Transport',
    total: 6000,
    pending: 500,
    generated: false,
  },
  {
    slNo: 3,
    orderDate: '2024-06-03',
    consignor: 'QuickMove',
    total: 7000,
    pending: 2000,
    generated: true,
  },
  {
    slNo: 4,
    orderDate: '2024-06-04',
    consignor: 'FastTrack',
    total: 8000,
    pending: 1000,
    generated: true,
  },
  {
    slNo: 5,
    orderDate: '2024-06-05',
    consignor: 'BlueDart',
    total: 9000,
    pending: 3000,
    generated: false,
  },
  {
    slNo: 6,
    orderDate: '2024-06-06',
    consignor: 'SafeShip',
    total: 4000,
    pending: 0,
    generated: true,
  },
  {
    slNo: 7,
    orderDate: '2024-06-07',
    consignor: 'GreenTransport',
    total: 7500,
    pending: 1500,
    generated: true,
  },
  {
    slNo: 8,
    orderDate: '2024-06-08',
    consignor: 'CargoJet',
    total: 6700,
    pending: 1200,
    generated: false,
  },
  {
    slNo: 9,
    orderDate: '2024-06-09',
    consignor: 'RedX',
    total: 7100,
    pending: 400,
    generated: true,
  },
  {
    slNo: 10,
    orderDate: '2024-06-10',
    consignor: 'OmniTrans',
    total: 6200,
    pending: 700,
    generated: false,
  },
];

import { Component } from '@angular/core';
import { AppLayoutComponent } from '../../../../../layouts/app-layout/app-layout.component';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ExpandableTableComponent } from '../../../../ReuseableComponents/expandable-table/expandable-table.component';

@Component({
  selector: 'app-booking-list',
  imports: [
    QuickNavigationComponent,
    SharableSearchInputComponent,
    SharableTitleComponent,
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ExpandableTableComponent,
  ],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css',
})
export class BookingListComponent {
  dataSource = new MatTableDataSource(CONSIGNMENT_DATA);
  displayedColumns = [
    'index',
    'cnNo',
    'consignor',
    'consignee',
    'weight',
    'conNo',
    'totPkg',
    'vehicleNo',
    'cfsName',
    'status',
    'invNoDt',
    'print',
  ];

  columnHeaders: Record<string, string> = {
    index: '#',
    cnNo: 'CN No',
    consignor: 'Consignor',
    consignee: 'Consignee',
    fromViaTo: 'From-Via-To',
    weight: 'Weight',
    conNo: 'Con. No',
    totPkg: 'Tot. Pkg',
    vehicleNo: 'Vehicle No',
    cfsName: 'CFS Name',
    status: 'Status',
    invNoDt: 'Inv No/Dt',
    print: 'Print',
  };
}

// consignmentData.tsx

export interface Consignment {
  index: number;
  cnNo: string;
  consignor: string;
  consignee: string;
  fromViaTo: string;
  weight: string;
  conNo: string;
  totPkg: number;
  vehicleNo: string;
  cfsName: string;
  status: string;
  invNoDt: string;
  print: string;
}

export const CONSIGNMENT_DATA: Consignment[] = [
  {
    index: 1,
    cnNo: 'CN001',
    consignor: 'FastTrack Ltd.',
    consignee: 'GoodsMart',
    fromViaTo: 'Delhi-Via-Agra-To-Kanpur',
    weight: '500kg',
    conNo: 'CON1001',
    totPkg: 10,
    vehicleNo: 'DL01AB1234',
    cfsName: 'CFS North',
    status: 'Pending',
    invNoDt: 'INV001/2025-06-01',
    print: '🖨️',
  },
  {
    index: 2,
    cnNo: 'CN002',
    consignor: 'LogixPro',
    consignee: 'StoreKing',
    fromViaTo: 'Mumbai-Via-Nashik-To-Pune',
    weight: '750kg',
    conNo: 'CON1002',
    totPkg: 15,
    vehicleNo: 'MH12CD5678',
    cfsName: 'CFS West',
    status: 'Dispatched',
    invNoDt: 'INV002/2025-06-02',
    print: '🖨️',
  },
  {
    index: 3,
    cnNo: 'CN003',
    consignor: 'PackNSend',
    consignee: 'BazaarHub',
    fromViaTo: 'Chennai-Via-Vellore-To-Salem',
    weight: '400kg',
    conNo: 'CON1003',
    totPkg: 8,
    vehicleNo: 'TN10EF3456',
    cfsName: 'CFS South',
    status: 'Delivered',
    invNoDt: 'INV003/2025-06-03',
    print: '🖨️',
  },
  {
    index: 4,
    cnNo: 'CN004',
    consignor: 'MoveItNow',
    consignee: 'QuickBuy',
    fromViaTo: 'Kolkata-Via-Durgapur-To-Asansol',
    weight: '600kg',
    conNo: 'CON1004',
    totPkg: 12,
    vehicleNo: 'WB20GH7890',
    cfsName: 'CFS East',
    status: 'In Transit',
    invNoDt: 'INV004/2025-06-04',
    print: '🖨️',
  },
  {
    index: 5,
    cnNo: 'CN005',
    consignor: 'TransGo',
    consignee: 'RetailCorp',
    fromViaTo: 'Hyderabad-Via-Warangal-To-Karimnagar',
    weight: '350kg',
    conNo: 'CON1005',
    totPkg: 6,
    vehicleNo: 'TS09IJ1122',
    cfsName: 'CFS Central',
    status: 'Pending',
    invNoDt: 'INV005/2025-06-05',
    print: '🖨️',
  },
  {
    index: 6,
    cnNo: 'CN006',
    consignor: 'QuickLogix',
    consignee: 'DailyMart',
    fromViaTo: 'Bangalore-Via-Mysore-To-Hassan',
    weight: '900kg',
    conNo: 'CON1006',
    totPkg: 18,
    vehicleNo: 'KA03KL3344',
    cfsName: 'CFS South',
    status: 'Dispatched',
    invNoDt: 'INV006/2025-06-06',
    print: '🖨️',
  },
  {
    index: 7,
    cnNo: 'CN007',
    consignor: 'SpeedyCargo',
    consignee: 'UrbanMall',
    fromViaTo: 'Ahmedabad-Via-Rajkot-To-Jamnagar',
    weight: '420kg',
    conNo: 'CON1007',
    totPkg: 9,
    vehicleNo: 'GJ06MN5566',
    cfsName: 'CFS West',
    status: 'Delivered',
    invNoDt: 'INV007/2025-06-07',
    print: '🖨️',
  },
  {
    index: 8,
    cnNo: 'CN008',
    consignor: 'ShipSmart',
    consignee: 'MetroShop',
    fromViaTo: 'Jaipur-Via-Kota-To-Udaipur',
    weight: '530kg',
    conNo: 'CON1008',
    totPkg: 11,
    vehicleNo: 'RJ14OP7788',
    cfsName: 'CFS North',
    status: 'In Transit',
    invNoDt: 'INV008/2025-06-08',
    print: '🖨️',
  },
  {
    index: 9,
    cnNo: 'CN009',
    consignor: 'CargoSwift',
    consignee: 'RetailKart',
    fromViaTo: 'Lucknow-Via-Kanpur-To-Varanasi',
    weight: '480kg',
    conNo: 'CON1009',
    totPkg: 13,
    vehicleNo: 'UP32QR9900',
    cfsName: 'CFS Central',
    status: 'Pending',
    invNoDt: 'INV009/2025-06-09',
    print: '🖨️',
  },
  {
    index: 10,
    cnNo: 'CN010',
    consignor: 'RoadLink',
    consignee: 'CityBazaar',
    fromViaTo: 'Bhopal-Via-Indore-To-Gwalior',
    weight: '670kg',
    conNo: 'CON1010',
    totPkg: 17,
    vehicleNo: 'MP09ST3344',
    cfsName: 'CFS Central',
    status: 'Delivered',
    invNoDt: 'INV010/2025-06-10',
    print: '🖨️',
  },
];

import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { BackComponent } from '../../../ReuseableComponents/back/back.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-direct-deliveries',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    StatementsBtnComponent,
    BackComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './direct-deliveries.component.html',
  styleUrl: './direct-deliveries.component.css',
})
export class DirectDeliveriesComponent {
  statementName: string = 'Pending Delivery Statement';
  currentPage: string = 'Quick List';
  placeholderText: string = 'CN No/Consignee Name / Mobile No';

  dataSource = new MatTableDataSource(consignmentBookings);
  displayedColumns: string[] = [
    'id',
    'cnNo',
    'bookingDate',
    'consignor',
    'invoiceNo',
    'consignee',
    'from',
    'to',
    'vendor',
  ];

  columnHeaders: Record<string, string> = {
    id: '#',
    cnNo: 'CN No',
    bookingDate: 'Booking Date',
    consignor: 'Consignor',
    invoiceNo: 'Inv. No',
    consignee: 'Consignee',
    from: 'From',
    to: 'To',
    vendor: 'Vendor',
  };
}

export interface ConsignmentBooking {
  id: number;
  cnNo: string;
  bookingDate: string;
  consignor: string;
  invoiceNo: string;
  consignee: string;
  from: string;
  to: string;
  vendor: string;
}

export const consignmentBookings: ConsignmentBooking[] = [
  {
    id: 1,
    cnNo: 'CN001',
    bookingDate: '2025-06-01',
    consignor: 'TechSource Ltd.',
    invoiceNo: 'INV001',
    consignee: 'ElectroMart',
    from: 'Delhi',
    to: 'Lucknow',
    vendor: 'FastTrack',
  },
  {
    id: 2,
    cnNo: 'CN002',
    bookingDate: '2025-06-02',
    consignor: 'Granito Corp',
    invoiceNo: 'INV002',
    consignee: 'HomeTiles',
    from: 'Ahmedabad',
    to: 'Surat',
    vendor: 'CargoXpress',
  },
  {
    id: 3,
    cnNo: 'CN003',
    bookingDate: '2025-06-03',
    consignor: 'FashionKart',
    invoiceNo: 'INV003',
    consignee: 'ClothCentre',
    from: 'Mumbai',
    to: 'Indore',
    vendor: 'SpeedLine',
  },
  {
    id: 4,
    cnNo: 'CN004',
    bookingDate: '2025-06-03',
    consignor: 'EduBooks Ltd.',
    invoiceNo: 'INV004',
    consignee: 'ReadMore Library',
    from: 'Chennai',
    to: 'Bangalore',
    vendor: 'BookLogix',
  },
  {
    id: 5,
    cnNo: 'CN005',
    bookingDate: '2025-06-04',
    consignor: 'Agro Foods',
    invoiceNo: 'INV005',
    consignee: 'SuperMart',
    from: 'Nagpur',
    to: 'Raipur',
    vendor: 'AgriMove',
  },
  {
    id: 6,
    cnNo: 'CN006',
    bookingDate: '2025-06-04',
    consignor: 'TechNova',
    invoiceNo: 'INV006',
    consignee: 'ComputeWorld',
    from: 'Pune',
    to: 'Hyderabad',
    vendor: 'ByteCarrier',
  },
  {
    id: 7,
    cnNo: 'CN007',
    bookingDate: '2025-06-05',
    consignor: 'PharmaZone',
    invoiceNo: 'INV007',
    consignee: 'Wellness Care',
    from: 'Kolkata',
    to: 'Guwahati',
    vendor: 'MediTrans',
  },
  {
    id: 8,
    cnNo: 'CN008',
    bookingDate: '2025-06-05',
    consignor: 'FurniFab',
    invoiceNo: 'INV008',
    consignee: 'StyleLiving',
    from: 'Jaipur',
    to: 'Jodhpur',
    vendor: 'FurniMovers',
  },
  {
    id: 9,
    cnNo: 'CN009',
    bookingDate: '2025-06-06',
    consignor: 'ChemIndia Ltd.',
    invoiceNo: 'INV009',
    consignee: 'LabCentral',
    from: 'Panipat',
    to: 'Kanpur',
    vendor: 'ChemLogix',
  },
  {
    id: 10,
    cnNo: 'CN010',
    bookingDate: '2025-06-06',
    consignor: 'FootTrack',
    invoiceNo: 'INV010',
    consignee: 'ShoePlanet',
    from: 'Agra',
    to: 'Varanasi',
    vendor: 'QuickHaul',
  },
];



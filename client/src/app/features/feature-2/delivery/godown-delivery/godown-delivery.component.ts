import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { BackComponent } from '../../../ReuseableComponents/back/back.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-godown-delivery',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    StatementsBtnComponent,
    BackComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './godown-delivery.component.html',
  styleUrl: './godown-delivery.component.css',
})
export class GodownDeliveryComponent {
  currentPage: string = 'Pending List';
  statementName: string = 'Pending Delivery Statement';
  placeholderText: string = 'CN No / Manual CN No';

  displayedColumns: string[] = [
    'id',
    'cnNo',
    'bookingDate',
    'productDetails',
    'consignor',
    'consignee',
    'from',
    'to',
    'vendor',
  ];

  columnHeaders: Record<string, string> = {
    id: 'SL No',
    cnNo: 'CN No',
    bookingDate: 'Booking Date',
    productDetails: 'Product Details',
    consignor: 'Consignor',
    consignee: 'Consignee',
    from: 'From',
    to: 'To',
    vendor: 'Vendor',
  };

  dataSource = new MatTableDataSource(consignmentBookings);
}


export interface ConsignmentBooking {
  id: number;
  cnNo: string;
  bookingDate: string;
  productDetails: string;
  consignor: string;
  consignee: string;
  from: string;
  to: string;
  vendor: string;
}


export const consignmentBookings: ConsignmentBooking[] = [
  {
    id: 1,
    cnNo: 'CNB001',
    bookingDate: '2025-06-01',
    productDetails: 'Electronics - 25 boxes',
    consignor: 'TechSource Ltd.',
    consignee: 'ElectroMart',
    from: 'Delhi',
    to: 'Lucknow',
    vendor: 'Blue Dart',
  },
  {
    id: 2,
    cnNo: 'CNB002',
    bookingDate: '2025-06-02',
    productDetails: 'Tiles - 100 crates',
    consignor: 'Granito Corp',
    consignee: 'HomeTiles',
    from: 'Ahmedabad',
    to: 'Surat',
    vendor: 'Gati',
  },
  {
    id: 3,
    cnNo: 'CNB003',
    bookingDate: '2025-06-03',
    productDetails: 'Clothing - 500 units',
    consignor: 'FashionKart',
    consignee: 'ClothCentre',
    from: 'Mumbai',
    to: 'Indore',
    vendor: 'Delhivery',
  },
  {
    id: 4,
    cnNo: 'CNB004',
    bookingDate: '2025-06-03',
    productDetails: 'Books - 200kg',
    consignor: 'EduBooks Ltd.',
    consignee: 'ReadMore Library',
    from: 'Chennai',
    to: 'Bangalore',
    vendor: 'India Post',
  },
  {
    id: 5,
    cnNo: 'CNB005',
    bookingDate: '2025-06-04',
    productDetails: 'Food Grains - 5 Tons',
    consignor: 'Agro Foods',
    consignee: 'SuperMart',
    from: 'Nagpur',
    to: 'Raipur',
    vendor: 'VRL',
  },
  {
    id: 6,
    cnNo: 'CNB006',
    bookingDate: '2025-06-04',
    productDetails: 'Laptops - 60 units',
    consignor: 'TechNova',
    consignee: 'ComputeWorld',
    from: 'Pune',
    to: 'Hyderabad',
    vendor: 'FedEx',
  },
  {
    id: 7,
    cnNo: 'CNB007',
    bookingDate: '2025-06-05',
    productDetails: 'Medicines - 30 cartons',
    consignor: 'PharmaZone',
    consignee: 'Wellness Care',
    from: 'Kolkata',
    to: 'Guwahati',
    vendor: 'DTDC',
  },
  {
    id: 8,
    cnNo: 'CNB008',
    bookingDate: '2025-06-05',
    productDetails: 'Furniture - 8 sets',
    consignor: 'FurniFab',
    consignee: 'StyleLiving',
    from: 'Jaipur',
    to: 'Jodhpur',
    vendor: 'XpressBees',
  },
  {
    id: 9,
    cnNo: 'CNB009',
    bookingDate: '2025-06-06',
    productDetails: 'Chemicals - 2 Drums',
    consignor: 'ChemIndia Ltd.',
    consignee: 'LabCentral',
    from: 'Panipat',
    to: 'Kanpur',
    vendor: 'Safexpress',
  },
  {
    id: 10,
    cnNo: 'CNB010',
    bookingDate: '2025-06-06',
    productDetails: 'Shoes - 150 pairs',
    consignor: 'FootTrack',
    consignee: 'ShoePlanet',
    from: 'Agra',
    to: 'Varanasi',
    vendor: 'Delhivery',
  },
];

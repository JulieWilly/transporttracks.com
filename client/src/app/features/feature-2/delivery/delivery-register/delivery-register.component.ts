import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { BackComponent } from '../../../ReuseableComponents/back/back.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { ExpandableTableComponent } from '../../../ReuseableComponents/expandable-table/expandable-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';

@Component({
  selector: 'app-delivery-register',
  imports: [
    QuickNavigationComponent,
    SharableSearchInputComponent,
    BackComponent,
    StatementsBtnComponent,
    ExpandableTableComponent,
    SharableTitleComponent
  ],
  templateUrl: './delivery-register.component.html',
  styleUrl: './delivery-register.component.css',
})
export class DeliveryRegisterComponent {
  currentPage: string = 'Delivery Register';
  statementName: string = 'Delivery Statement';
  placeholderText:string = 'CN No / Consignee Name / Mobile No';

  displayedColumns: string[] = [
    'id',
    'cnNo',
    'delivery',
    'deliveryThrough',
    'productDetails',
    'consignor',
    'consignee',
    'fromTo',
    'mobileUpload',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    id: 'SL No',
    cnNo: 'CN No',
    delivery: 'Delivery',
    deliveryThrough: 'Delivery Through',
    productDetails: 'Product Details',
    consignor: 'Consignor',
    consignee: 'Consignee',
    fromTo: 'From & To',
    mobileUpload: 'Mobile Upload',
    actions: 'Actions'

  };

  dataSource = new MatTableDataSource(deliveryNotes);
}

export interface DeliveryNote {
  id: number;
  cnNo: string;
  delivery: string;
  deliveryThrough: string;
  productDetails: string;
  consignor: string;
  consignee: string;
  fromTo: string;
}



export const deliveryNotes: DeliveryNote[] = [
  {
    id: 1,
    cnNo: 'CN1001',
    delivery: 'Completed',
    deliveryThrough: 'Truck - MH12AB1234',
    productDetails: 'Steel Rods - 5 Tons',
    consignor: 'Tata Steel',
    consignee: 'BuildTech',
    fromTo: 'Mumbai → Pune',
  },
  {
    id: 2,
    cnNo: 'CN1002',
    delivery: 'Pending',
    deliveryThrough: 'Train - Express 2234',
    productDetails: 'Cement Bags - 200',
    consignor: 'Ambuja Cement',
    consignee: 'Mitra Construction',
    fromTo: 'Ahmedabad → Vadodara',
  },
  {
    id: 3,
    cnNo: 'CN1003',
    delivery: 'In Transit',
    deliveryThrough: 'Courier - DTDC',
    productDetails: 'Pharma Items - Box 5',
    consignor: 'Sun Pharma',
    consignee: 'MediCorp',
    fromTo: 'Delhi → Meerut',
  },
  {
    id: 4,
    cnNo: 'CN1004',
    delivery: 'Completed',
    deliveryThrough: 'Truck - KA01CD6789',
    productDetails: 'Paint Cans - 50',
    consignor: 'Asian Paints',
    consignee: 'ColorMax',
    fromTo: 'Bangalore → Mysore',
  },
  {
    id: 5,
    cnNo: 'CN1005',
    delivery: 'Pending',
    deliveryThrough: 'Air - Indigo 6E320',
    productDetails: 'Mobile Phones - 300 units',
    consignor: 'Samsung India',
    consignee: 'Gadget Store',
    fromTo: 'Hyderabad → Chennai',
  },
  {
    id: 6,
    cnNo: 'CN1006',
    delivery: 'Completed',
    deliveryThrough: 'Truck - RJ14XY9999',
    productDetails: 'Furnishing Fabric Rolls',
    consignor: 'Raymond Ltd.',
    consignee: 'Fab Depot',
    fromTo: 'Jaipur → Udaipur',
  },
  {
    id: 7,
    cnNo: 'CN1007',
    delivery: 'In Transit',
    deliveryThrough: 'Courier - Blue Dart',
    productDetails: 'Books - 120kg',
    consignor: 'Scholars Press',
    consignee: 'Library Mart',
    fromTo: 'Lucknow → Varanasi',
  },
  {
    id: 8,
    cnNo: 'CN1008',
    delivery: 'Pending',
    deliveryThrough: 'Truck - WB23BB1020',
    productDetails: 'Vegetables - 1.5 Tons',
    consignor: 'FreshFarms',
    consignee: 'MarketLink',
    fromTo: 'Kolkata → Bhubaneswar',
  },
  {
    id: 9,
    cnNo: 'CN1009',
    delivery: 'Completed',
    deliveryThrough: 'Van - DL10XYZ5678',
    productDetails: 'Laptop Bags - 400pcs',
    consignor: 'Urban Carry',
    consignee: 'BagZone',
    fromTo: 'Gurgaon → Noida',
  },
  {
    id: 10,
    cnNo: 'CN1010',
    delivery: 'In Transit',
    deliveryThrough: 'Bike - Local Agent',
    productDetails: 'Documents Packet',
    consignor: 'LegalDocs Ltd.',
    consignee: 'InfoServe',
    fromTo: 'Chandigarh → Shimla',
  },
];


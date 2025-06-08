import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { StatementsBtnComponent } from '../../../ReuseableComponents/statements-btn/statements-btn.component';
import { BackComponent } from '../../../ReuseableComponents/back/back.component';
import { ShortDropDown1Component } from '../../../ReuseableComponents/short-drop-down-1/short-drop-down-1.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-full-load-delivery-register',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    SharableSearchInputComponent,
    BackComponent,
    StatementsBtnComponent,
    ShortDropDown1Component,
    SharableTableComponent,
  ],
  templateUrl: './full-load-delivery-register.component.html',
  styleUrl: './full-load-delivery-register.component.css',
})
export class FullLoadDeliveryRegisterComponent {
  currentPage: string = 'Full Load Register';
  statementName: string = 'Delivery Statement';
  placeholderText: string = 'CN No/ Consignor / Consignee Name /Mobile No';

  displayedColumns: string[] = [
    'id',
    'cnNoDate',
    'productDetails',
    'consignor',
    'consignee',
    'fromTo',
    'status',
    'mobileUpload',
    'actions',
  ];
  columnHeaders: { [key: string]: string } = {
    id: '#',
    cnNoDate: 'CN No/Date',
    productDetails: 'Product Details',
    consignor: 'Consignor',
    consignee: 'Consignee',
    fromTo: 'From - To',
    status: 'Status',
    mobileUpload: 'Mobile Upload',
    actions: 'Actions',
  };

  dropDownInput: string[] = [
    'Filter By',
    'CN No',
    'Consignor Name / Mobile',
    'Consignee Name / Mobile',
  ];
  dataSource = new MatTableDataSource(consignmentUploads);
}

export interface ConsignmentUpload {
  id: number;
  cnNoDate: string;
  productDetails: string;
  consignor: string;
  consignee: string;
  fromTo: string;
  status: string;
}

export const consignmentUploads: ConsignmentUpload[] = [
  {
    id: 1,
    cnNoDate: 'CN001 / 2025-06-01',
    productDetails: 'Electronics - 25 boxes',
    consignor: 'TechSource Ltd.',
    consignee: 'ElectroMart',
    fromTo: 'Delhi - Lucknow',
    status: '',
  },
  {
    id: 2,
    cnNoDate: 'CN002 / 2025-06-02',
    productDetails: 'Tiles - 100 crates',
    consignor: 'Granito Corp',
    consignee: 'HomeTiles',
    fromTo: 'Ahmedabad - Surat',
    status: 'Pending',
  },
  {
    id: 3,
    cnNoDate: 'CN003 / 2025-06-03',
    productDetails: 'Clothing - 500 units',
    consignor: 'FashionKart',
    consignee: 'ClothCentre',
    fromTo: 'Mumbai - Indore',
    status: '',
  },
  {
    id: 4,
    cnNoDate: 'CN004 / 2025-06-03',
    productDetails: 'Books - 200kg',
    consignor: 'EduBooks Ltd.',
    consignee: 'ReadMore Library',
    fromTo: 'Chennai - Bangalore',
    status: '',
  },
  {
    id: 5,
    cnNoDate: 'CN005 / 2025-06-04',
    productDetails: 'Food Grains - 5 Tons',
    consignor: 'Agro Foods',
    consignee: 'SuperMart',
    fromTo: 'Nagpur - Raipur',
    status: '',
  },
  {
    id: 6,
    cnNoDate: 'CN006 / 2025-06-04',
    productDetails: 'Laptops - 60 units',
    consignor: 'TechNova',
    consignee: 'ComputeWorld',
    fromTo: 'Pune - Hyderabad',
    status: '',
  },
  {
    id: 7,
    cnNoDate: 'CN007 / 2025-06-05',
    productDetails: 'Medicines - 30 cartons',
    consignor: 'PharmaZone',
    consignee: 'Wellness Care',
    fromTo: 'Kolkata - Guwahati',
    status: '',
  },
  {
    id: 8,
    cnNoDate: 'CN008 / 2025-06-05',
    productDetails: 'Furniture - 8 sets',
    consignor: 'FurniFab',
    consignee: 'StyleLiving',
    fromTo: 'Jaipur - Jodhpur',
    status: '',
  },
  {
    id: 9,
    cnNoDate: 'CN009 / 2025-06-06',
    productDetails: 'Chemicals - 2 Drums',
    consignor: 'ChemIndia Ltd.',
    consignee: 'LabCentral',
    fromTo: 'Panipat - Kanpur',
    status: '',
  },
  {
    id: 10,
    cnNoDate: 'CN010 / 2025-06-06',
    productDetails: 'Shoes - 150 pairs',
    consignor: 'FootTrack',
    consignee: 'ShoePlanet',
    fromTo: 'Agra - Varanasi',
    status: '',
  },
];

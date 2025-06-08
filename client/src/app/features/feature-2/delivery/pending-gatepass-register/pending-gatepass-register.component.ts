import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { BackComponent } from '../../../ReuseableComponents/back/back.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { MatTableDataSource } from '@angular/material/table';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';

@Component({
  selector: 'app-pending-gatepass-register',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    BackComponent,
    SharableSearchInputComponent,
    SharableTableComponent
  ],
  templateUrl: './pending-gatepass-register.component.html',
  styleUrl: './pending-gatepass-register.component.css',
})
export class PendingGatepassRegisterComponent {
  currentPage: string = 'Pending Gatepass Register';
  placeholderText: string = 'CN No / Manual CN No';

  dataSource = new MatTableDataSource(consignmentNotes);
  displayedColumns: string[] = [
    'id',
    'cnNo',
    'cnDate',
    'productDetails',
    'consignor',
    'consignee',
    'from',
    'to',
  ];

  columnHeaders: Record<string, string> = {
    id: 'SL No',
    cnNo: 'CN No',
    cnDate: 'CN Date',
    productDetails: 'Product Details',
    consignor: 'Consignor',
    consignee: 'Consignee',
    from: 'From',
    to: 'To',
  };
}

export interface ConsignmentNote {
  id: number;
  cnNo: string;
  cnDate: string;
  productDetails: string;
  consignor: string;
  consignee: string;
  from: string;
  to: string;
}

export const consignmentNotes: ConsignmentNote[] = [
  {
    id: 1,
    cnNo: 'CN001',
    cnDate: '2025-06-01',
    productDetails: 'Textile Rolls - 100kg',
    consignor: 'Bright Textiles',
    consignee: 'Urban Stores',
    from: 'Mumbai',
    to: 'Pune',
  },
  {
    id: 2,
    cnNo: 'CN002',
    cnDate: '2025-06-01',
    productDetails: 'Electronic Components',
    consignor: 'Maxx Electronics',
    consignee: 'Tech Zone',
    from: 'Chennai',
    to: 'Bangalore',
  },
  {
    id: 3,
    cnNo: 'CN003',
    cnDate: '2025-06-01',
    productDetails: 'Plastic Sheets - 200pcs',
    consignor: 'Neo Plastics',
    consignee: 'Omkar Packaging',
    from: 'Delhi',
    to: 'Kanpur',
  },
  {
    id: 4,
    cnNo: 'CN004',
    cnDate: '2025-06-02',
    productDetails: 'Furniture Sets',
    consignor: 'WoodWorks Ltd.',
    consignee: 'HomeStyle',
    from: 'Jaipur',
    to: 'Ahmedabad',
  },
  {
    id: 5,
    cnNo: 'CN005',
    cnDate: '2025-06-02',
    productDetails: 'Cement Bags - 50kg x 100',
    consignor: 'Cemtex Co.',
    consignee: 'BuildRight',
    from: 'Hyderabad',
    to: 'Vijayawada',
  },
  {
    id: 6,
    cnNo: 'CN006',
    cnDate: '2025-06-02',
    productDetails: 'Medicines - 20 boxes',
    consignor: 'PharmaLife',
    consignee: 'Green Pharmacy',
    from: 'Surat',
    to: 'Nagpur',
  },
  {
    id: 7,
    cnNo: 'CN007',
    cnDate: '2025-06-03',
    productDetails: 'Books - 10 cartons',
    consignor: 'EduPrint',
    consignee: 'Knowledge Mart',
    from: 'Lucknow',
    to: 'Ranchi',
  },
  {
    id: 8,
    cnNo: 'CN008',
    cnDate: '2025-06-03',
    productDetails: 'Vegetable Oil - 100 litres',
    consignor: 'Agro Foods',
    consignee: 'Daily Needs',
    from: 'Indore',
    to: 'Gwalior',
  },
  {
    id: 9,
    cnNo: 'CN009',
    cnDate: '2025-06-03',
    productDetails: 'Machinery Parts',
    consignor: 'SteelWorks',
    consignee: 'PowerMech',
    from: 'Raipur',
    to: 'Patna',
  },
  {
    id: 10,
    cnNo: 'CN010',
    cnDate: '2025-06-04',
    productDetails: 'Mobile Phones - 200 units',
    consignor: 'Digital Hub',
    consignee: 'PhoneGallery',
    from: 'Kolkata',
    to: 'Bhubaneswar',
  },
];


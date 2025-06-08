import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';


@Component({
  selector: 'app-barcode-delivery-register',
  imports: [
    QuickNavigationComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
    SharableTitleComponent
  ],
  templateUrl: './barcode-delivery-register.component.html',
  styleUrl: './barcode-delivery-register.component.css',
})
export class BarcodeDeliveryRegisterComponent {
  currentPage: string = 'Barcode Delivery Register';
  btnName: string = 'Add New';
  placeholderText: string = 'Delivery No';

  displayedColumns: string[] = [
    'id',
    'deliveryNo',
    'deliveryDate',
    'deliveryBy',
    'deliveryAgent',
    'deliveryDetails',
    'actions'
  ];

  columnHeaders: Record<string, string> = {
    id: 'SL No',
    deliveryNo: 'Delivery No',
    deliveryDate: 'Delivery Date',
    deliveryBy: 'Delivery By',
    deliveryAgent: 'Delivery Agent',
    deliveryDetails: 'Delivery Details',
    actions: 'Actions',
  };

  dataSource = new MatTableDataSource(deliveryRecords);
}


export interface DeliveryRecord {
  id: number;
  deliveryNo: string;
  deliveryDate: string;
  deliveryBy: string;
  deliveryAgent: string;
  deliveryDetails: string;
}

export const deliveryRecords: DeliveryRecord[] = [
  {
    id: 1,
    deliveryNo: 'DL001',
    deliveryDate: '2024-06-01',
    deliveryBy: 'Warehouse A',
    deliveryAgent: 'John Doe',
    deliveryDetails: '10 boxes of electronics',
  },
  {
    id: 2,
    deliveryNo: 'DL002',
    deliveryDate: '2024-06-02',
    deliveryBy: 'Warehouse B',
    deliveryAgent: 'Alice Smith',
    deliveryDetails: 'Furniture set',
  },
  {
    id: 3,
    deliveryNo: 'DL003',
    deliveryDate: '2024-06-03',
    deliveryBy: 'Warehouse C',
    deliveryAgent: 'Bob Johnson',
    deliveryDetails: 'Bulk stationery supplies',
  },
  {
    id: 4,
    deliveryNo: 'DL004',
    deliveryDate: '2024-06-04',
    deliveryBy: 'Warehouse A',
    deliveryAgent: 'Karen Lee',
    deliveryDetails: 'Frozen foods',
  },
  {
    id: 5,
    deliveryNo: 'DL005',
    deliveryDate: '2024-06-05',
    deliveryBy: 'Warehouse D',
    deliveryAgent: 'Mike Green',
    deliveryDetails: 'Industrial parts',
  },
  {
    id: 6,
    deliveryNo: 'DL006',
    deliveryDate: '2024-06-06',
    deliveryBy: 'Warehouse A',
    deliveryAgent: 'Nina Park',
    deliveryDetails: 'Glassware',
  },
  {
    id: 7,
    deliveryNo: 'DL007',
    deliveryDate: '2024-06-07',
    deliveryBy: 'Warehouse B',
    deliveryAgent: 'Samuel Kim',
    deliveryDetails: 'Medical supplies',
  },
  {
    id: 8,
    deliveryNo: 'DL008',
    deliveryDate: '2024-06-08',
    deliveryBy: 'Warehouse C',
    deliveryAgent: 'Judy Roy',
    deliveryDetails: 'Machinery',
  },
  {
    id: 9,
    deliveryNo: 'DL009',
    deliveryDate: '2024-06-09',
    deliveryBy: 'Warehouse D',
    deliveryAgent: 'Tom Bright',
    deliveryDetails: 'Pharmaceutical items',
  },
  {
    id: 10,
    deliveryNo: 'DL010',
    deliveryDate: '2024-06-10',
    deliveryBy: 'Warehouse A',
    deliveryAgent: 'Sara Miles',
    deliveryDetails: 'Books and stationery',
  },
];


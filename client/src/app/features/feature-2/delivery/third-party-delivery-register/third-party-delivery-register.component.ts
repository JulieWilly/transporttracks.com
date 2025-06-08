import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-third-party-delivery-register',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './third-party-delivery-register.component.html',
  styleUrl: './third-party-delivery-register.component.css',
})
export class ThirdPartyDeliveryRegisterComponent {
  currentPage: string = 'Door Delivery Register';
  placeholderText: string = 'CN / LR No';

  dataSource = new MatTableDataSource(deliveryRecords);
  displayedColumns: string[] = [
    'id',
    'deliveryNo',
    'deliveryDate',
    'deliveryBy',
    'deliveryAgent',
    'amount',
    'deliveryDetails',
    'actions'
  ];

  columnHeaders: Record<string, string> = {
    id: 'SL No',
    deliveryNo: 'Delivery No',
    deliveryDate: 'Delivery Date',
    deliveryBy: 'Delivery By',
    deliveryAgent: 'Delivery Agent',
    amount: 'Amount',
    deliveryDetails: 'Delivery Details',
    actions:'Actions'
  };
}

export interface DeliveryRecord {
  id: number;
  deliveryNo: string;
  deliveryDate: string;
  deliveryBy: string;
  deliveryAgent: string;
  amount: number;
  deliveryDetails: string;
}

export const deliveryRecords: DeliveryRecord[] = [
  {
    id: 1,
    deliveryNo: 'D001',
    deliveryDate: '2025-06-01',
    deliveryBy: 'LogiTrans',
    deliveryAgent: 'John Doe',
    amount: 2500,
    deliveryDetails: 'Electronics items for ElectroMart',
  },
  {
    id: 2,
    deliveryNo: 'D002',
    deliveryDate: '2025-06-02',
    deliveryBy: 'QuickDrop',
    deliveryAgent: 'Jane Smith',
    amount: 1800,
    deliveryDetails: 'Books shipment to Public Library',
  },
  {
    id: 3,
    deliveryNo: 'D003',
    deliveryDate: '2025-06-03',
    deliveryBy: 'SwiftHaul',
    deliveryAgent: 'Ajay Kumar',
    amount: 3200,
    deliveryDetails: 'Furniture order for FurniHome',
  },
  {
    id: 4,
    deliveryNo: 'D004',
    deliveryDate: '2025-06-03',
    deliveryBy: 'AgroMove',
    deliveryAgent: 'Ravi Shankar',
    amount: 1400,
    deliveryDetails: 'Grocery items for LocalMart',
  },
  {
    id: 5,
    deliveryNo: 'D005',
    deliveryDate: '2025-06-04',
    deliveryBy: 'MediTrans',
    deliveryAgent: 'Priya Nair',
    amount: 2750,
    deliveryDetails: 'Medical supplies for HealthCare Plus',
  },
  {
    id: 6,
    deliveryNo: 'D006',
    deliveryDate: '2025-06-04',
    deliveryBy: 'TechCarrier',
    deliveryAgent: 'Anil Mehta',
    amount: 3600,
    deliveryDetails: 'Laptop delivery for TechZone',
  },
  {
    id: 7,
    deliveryNo: 'D007',
    deliveryDate: '2025-06-05',
    deliveryBy: 'FreightPro',
    deliveryAgent: 'Sunita Rao',
    amount: 2100,
    deliveryDetails: 'Apparel items to TrendyWear',
  },
  {
    id: 8,
    deliveryNo: 'D008',
    deliveryDate: '2025-06-05',
    deliveryBy: 'UrbanDrop',
    deliveryAgent: 'Kiran Joshi',
    amount: 1950,
    deliveryDetails: 'Stationery order for SchoolZone',
  },
  {
    id: 9,
    deliveryNo: 'D009',
    deliveryDate: '2025-06-06',
    deliveryBy: 'SpeedExpress',
    deliveryAgent: 'Rahul Dev',
    amount: 2850,
    deliveryDetails: 'Mobile accessories for PhonePoint',
  },
  {
    id: 10,
    deliveryNo: 'D010',
    deliveryDate: '2025-06-06',
    deliveryBy: 'ExpressGo',
    deliveryAgent: 'Neha Kapoor',
    amount: 2300,
    deliveryDetails: 'Kitchen appliances for HomeChef Store',
  },
];


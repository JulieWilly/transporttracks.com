import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { BackComponent } from '../../../ReuseableComponents/back/back.component';


@Component({
  selector: 'app-door-third-party-delivery-pending-payments',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
    BackComponent
  ],
  templateUrl: './door-third-party-delivery-pending-payments.component.html',
  styleUrl: './door-third-party-delivery-pending-payments.component.css',
})
export class DoorThirdPartyDeliveryPendingPaymentsComponent {
  currentPage: string = 'Door Delivery Vehicle Pending Payments';
  placeholderText: string = 'Vehicle No/Third Party Agent Name';

  dataSource = new MatTableDataSource(shippingChargeRecords);
  displayedColumns: string[] = [
    'id',
    'vehicleAgent',
    'shippingCharge',
    'paidAmount',
    'dueAmount',
    'action',
  ];

  columnHeaders: Record<string, string> = {
    id: 'SL No',
    vehicleAgent: 'Vehicle No/Third Party Agent / Transporter',
    shippingCharge: 'Sipping Charge',
    paidAmount: 'Paid Amount',
    dueAmount: 'Due Amount',
    action: 'Action',
  };
}


export interface ShippingChargeRecord {
  id: number;
  vehicleAgent: string;
  shippingCharge: number;
  paidAmount: number;
  dueAmount: number;
}


export const shippingChargeRecords: ShippingChargeRecord[] = [
  {
    id: 1,
    vehicleAgent: 'MH12AB1234 / Raj Logistics',
    shippingCharge: 3500,
    paidAmount: 3000,
    dueAmount: 500,
  },
  {
    id: 2,
    vehicleAgent: 'DL10CD5678 / FastMove Transports',
    shippingCharge: 4000,
    paidAmount: 4000,
    dueAmount: 0,
  },
  {
    id: 3,
    vehicleAgent: 'KA03EF9012 / SpeedEx Agents',
    shippingCharge: 2800,
    paidAmount: 2000,
    dueAmount: 800,
  },
  {
    id: 4,
    vehicleAgent: 'TN22GH3456 / Local Carriers',
    shippingCharge: 2200,
    paidAmount: 2200,
    dueAmount: 0,
  },
  {
    id: 5,
    vehicleAgent: 'RJ14IJ7890 / NorthZone Movers',
    shippingCharge: 3100,
    paidAmount: 1500,
    dueAmount: 1600,
  },
  {
    id: 6,
    vehicleAgent: 'UP16KL1122 / CityLink Transport',
    shippingCharge: 5000,
    paidAmount: 3000,
    dueAmount: 2000,
  },
  {
    id: 7,
    vehicleAgent: 'GJ05MN3344 / Western Freight',
    shippingCharge: 4500,
    paidAmount: 4500,
    dueAmount: 0,
  },
  {
    id: 8,
    vehicleAgent: 'AP09OP5566 / East Coast Express',
    shippingCharge: 3800,
    paidAmount: 2500,
    dueAmount: 1300,
  },
  {
    id: 9,
    vehicleAgent: 'MP07QR7788 / GreenWay Movers',
    shippingCharge: 2700,
    paidAmount: 2700,
    dueAmount: 0,
  },
  {
    id: 10,
    vehicleAgent: 'CH01ST9900 / Capital Transport',
    shippingCharge: 3300,
    paidAmount: 2000,
    dueAmount: 1300,
  },
];

import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { BackComponent } from '../../../../ReuseableComponents/back/back.component';
import { AddBtnComponent } from '../../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { DateFromComponent } from '../../../../ReuseableComponents/date-from/date-from.component';
import { DateToComponent } from '../../../../ReuseableComponents/date-to/date-to.component';
import { ShortDropDown1Component } from '../../../../ReuseableComponents/short-drop-down-1/short-drop-down-1.component';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manage-fuel-payments',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    BackComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    DateFromComponent,
    DateToComponent,
    ShortDropDown1Component,
    SharableTableComponent,
  ],
  templateUrl: './manage-fuel-payments.component.html',
  styleUrl: './manage-fuel-payments.component.css',
})
export class ManageFuelPaymentsComponent {
  currentPage: string = 'Manage Fuel Payments';
  btnName: string = 'Give More Fuel';
  placeholderText:string = 'Search by Slip No';
  dataSource = new MatTableDataSource(fuelRecords);

  dropDownInput: string[] = [
    'Vehicle No.',
    'Hire NO',
    'Petrol Pump',
    'Slip No',
  ];

  displayedColumns: string[] = [
    'slNo',
    'date',
    'petrolPump',
    'slipOrCouponNo',
    'vehicleHire',
    'vehicleNo',
    'volume',
    'rate',
    'fuelType',
    'fuel',
    'cash',
    'total',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    date: 'Date',
    petrolPump: 'Petrol Pump',
    slipOrCouponNo: 'Slip/Coupon No',
    vehicleHire: 'Vehicle Hire',
    vehicleNo: 'Vehicle No',
    volume: 'Volume',
    rate: 'Rate',
    fuelType: 'Fuel Type',
    fuel: 'Fuel',
    cash: 'Cash',
    total: 'Total',
    actions: 'Actions',
  };
}

export interface FuelRecord {
  slNo: number;
  date: string;
  petrolPump: string;
  slipOrCouponNo: string;
  vehicleHire: string;
  vehicleNo: string;
  volume: number;
  rate: number;
  fuelType: string;
  fuel: number;
  cash: number;
  total: number;
}

export const fuelRecords: FuelRecord[] = [
  {
    slNo: 1,
    date: '2025-06-01',
    petrolPump: 'Shell Express',
    slipOrCouponNo: 'CP001',
    vehicleHire: 'Self',
    vehicleNo: 'KA-01-AB-1234',
    volume: 30,
    rate: 96.5,
    fuelType: 'Diesel',
    fuel: 2895,
    cash: 0,
    total: 2895,
  },
  {
    slNo: 2,
    date: '2025-06-02',
    petrolPump: 'HP Fuel Stop',
    slipOrCouponNo: 'CP002',
    vehicleHire: 'Rented',
    vehicleNo: 'KA-02-CD-5678',
    volume: 40,
    rate: 97,
    fuelType: 'Petrol',
    fuel: 3880,
    cash: 500,
    total: 4380,
  },
  {
    slNo: 3,
    date: '2025-06-03',
    petrolPump: 'IndianOil',
    slipOrCouponNo: 'CP003',
    vehicleHire: 'Self',
    vehicleNo: 'KA-03-EF-9012',
    volume: 25,
    rate: 98,
    fuelType: 'Diesel',
    fuel: 2450,
    cash: 2450,
    total: 2450,
  },
  {
    slNo: 4,
    date: '2025-06-04',
    petrolPump: 'Shell Express',
    slipOrCouponNo: 'CP004',
    vehicleHire: 'Rented',
    vehicleNo: 'KA-04-GH-3456',
    volume: 20,
    rate: 96,
    fuelType: 'Petrol',
    fuel: 1920,
    cash: 1920,
    total: 1920,
  },
  {
    slNo: 5,
    date: '2025-06-05',
    petrolPump: 'HP Fuel Stop',
    slipOrCouponNo: 'CP005',
    vehicleHire: 'Self',
    vehicleNo: 'KA-05-IJ-7890',
    volume: 35,
    rate: 97.5,
    fuelType: 'Diesel',
    fuel: 3412.5,
    cash: 3412.5,
    total: 3412.5,
  },
  {
    slNo: 6,
    date: '2025-06-06',
    petrolPump: 'IndianOil',
    slipOrCouponNo: 'CP006',
    vehicleHire: 'Rented',
    vehicleNo: 'KA-06-KL-2345',
    volume: 45,
    rate: 95,
    fuelType: 'Petrol',
    fuel: 4275,
    cash: 1000,
    total: 5275,
  },
  {
    slNo: 7,
    date: '2025-06-07',
    petrolPump: 'Shell Express',
    slipOrCouponNo: 'CP007',
    vehicleHire: 'Self',
    vehicleNo: 'KA-07-MN-6789',
    volume: 32,
    rate: 96.2,
    fuelType: 'Diesel',
    fuel: 3078.4,
    cash: 0,
    total: 3078.4,
  },
  {
    slNo: 8,
    date: '2025-06-08',
    petrolPump: 'HP Fuel Stop',
    slipOrCouponNo: 'CP008',
    vehicleHire: 'Rented',
    vehicleNo: 'KA-08-OP-1234',
    volume: 38,
    rate: 97.3,
    fuelType: 'Petrol',
    fuel: 3697.4,
    cash: 1000,
    total: 4697.4,
  },
  {
    slNo: 9,
    date: '2025-06-09',
    petrolPump: 'IndianOil',
    slipOrCouponNo: 'CP009',
    vehicleHire: 'Self',
    vehicleNo: 'KA-09-QR-5678',
    volume: 29,
    rate: 98.1,
    fuelType: 'Diesel',
    fuel: 2844.9,
    cash: 2844.9,
    total: 2844.9,
  },
  {
    slNo: 10,
    date: '2025-06-10',
    petrolPump: 'Shell Express',
    slipOrCouponNo: 'CP010',
    vehicleHire: 'Rented',
    vehicleNo: 'KA-10-ST-9012',
    volume: 26,
    rate: 95.8,
    fuelType: 'Petrol',
    fuel: 2490.8,
    cash: 0,
    total: 2490.8,
  },
];

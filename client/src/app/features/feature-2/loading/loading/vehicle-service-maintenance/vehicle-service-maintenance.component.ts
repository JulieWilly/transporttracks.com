import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { BackComponent } from '../../../../ReuseableComponents/back/back.component';
import { AddBtnComponent } from '../../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { MatTableDataSource } from '@angular/material/table';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { StatementsBtnComponent } from '../../../../ReuseableComponents/statements-btn/statements-btn.component';


@Component({
  selector: 'app-vehicle-service-maintenance',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    BackComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
    StatementsBtnComponent
  ],
  templateUrl: './vehicle-service-maintenance.component.html',
  styleUrl: './vehicle-service-maintenance.component.css',
})
export class VehicleServiceMaintenanceComponent {
  currentPage: string = 'Manage Vehicle Services';
  placeholderText:string = 'Vehicle No / Service Provider'
  btnName: string = 'Add New';

  dataSource = new MatTableDataSource(SERVICE_RECORD_DATA);

  displayedColumns: string[] = [
    'slNo',
    'serviceDate',
    'serviceProvider',
    'vehicleNo',
    'lastMeterReading',
    'serviceCharge',
    'totalServiceAmount',
    'discountAmount',
    'paidAmount',
    'dueAmount',
    'pay',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    serviceDate: 'Service Date',
    serviceProvider: 'Service Provider',
    vehicleNo: 'Vehicle No',
    lastMeterReading: 'Last Meter Reading',
    serviceCharge: 'Service Charge',
    totalServiceAmount: 'Total Service Amt',
    discountAmount: 'Dis. Amt',
    paidAmount: 'Paid Amt',
    dueAmount: 'Due Amt',
    pay: 'Pay',
    actions: 'Actions',
  };
}

export interface ServiceRecord {
  slNo: number;
  serviceDate: string;
  serviceProvider: string;
  vehicleNo: string;
  lastMeterReading: number;
  serviceCharge: number;
  totalServiceAmount: number;
  discountAmount: number;
  paidAmount: number;
  dueAmount: number;
  pay: boolean;

}


export const SERVICE_RECORD_DATA: ServiceRecord[] = [
  {
    slNo: 1,
    serviceDate: '2025-06-01',
    serviceProvider: 'SpeedX Auto',
    vehicleNo: 'KA01AB1234',
    lastMeterReading: 45230,
    serviceCharge: 500,
    totalServiceAmount: 550,
    discountAmount: 50,
    paidAmount: 300,
    dueAmount: 250,
    pay: true,
  },
  {
    slNo: 2,
    serviceDate: '2025-06-03',
    serviceProvider: 'AutoFix Garage',
    vehicleNo: 'KA02BC5678',
    lastMeterReading: 76100,
    serviceCharge: 800,
    totalServiceAmount: 800,
    discountAmount: 0,
    paidAmount: 800,
    dueAmount: 0,
    pay: false,
  },
  {
    slNo: 3,
    serviceDate: '2025-06-05',
    serviceProvider: 'City Auto Care',
    vehicleNo: 'KA03CD9012',
    lastMeterReading: 23000,
    serviceCharge: 600,
    totalServiceAmount: 630,
    discountAmount: 30,
    paidAmount: 500,
    dueAmount: 130,
    pay: true,
  },
  {
    slNo: 4,
    serviceDate: '2025-06-06',
    serviceProvider: 'Elite Motors',
    vehicleNo: 'KA04EF3456',
    lastMeterReading: 89900,
    serviceCharge: 700,
    totalServiceAmount: 770,
    discountAmount: 70,
    paidAmount: 770,
    dueAmount: 0,
    pay: false,
  },
  {
    slNo: 5,
    serviceDate: '2025-06-07',
    serviceProvider: 'Green Garage',
    vehicleNo: 'KA05GH7890',
    lastMeterReading: 31050,
    serviceCharge: 400,
    totalServiceAmount: 420,
    discountAmount: 20,
    paidAmount: 200,
    dueAmount: 220,
    pay: true,
  },
  {
    slNo: 6,
    serviceDate: '2025-06-08',
    serviceProvider: 'Metro Auto',
    vehicleNo: 'KA06IJ1122',
    lastMeterReading: 58200,
    serviceCharge: 900,
    totalServiceAmount: 950,
    discountAmount: 50,
    paidAmount: 950,
    dueAmount: 0,
    pay: false,
  },
  {
    slNo: 7,
    serviceDate: '2025-06-09',
    serviceProvider: 'Quick Repair Hub',
    vehicleNo: 'KA07KL3344',
    lastMeterReading: 70000,
    serviceCharge: 750,
    totalServiceAmount: 800,
    discountAmount: 50,
    paidAmount: 400,
    dueAmount: 400,
    pay: true
  },
  {
    slNo: 8,
    serviceDate: '2025-06-10',
    serviceProvider: 'Auto Pro Services',
    vehicleNo: 'KA08MN5566',
    lastMeterReading: 48000,
    serviceCharge: 850,
    totalServiceAmount: 900,
    discountAmount: 50,
    paidAmount: 900,
    dueAmount: 0,
    pay: false
  },
  {
    slNo: 9,
    serviceDate: '2025-06-11',
    serviceProvider: 'Urban Auto Works',
    vehicleNo: 'KA09OP7788',
    lastMeterReading: 67320,
    serviceCharge: 620,
    totalServiceAmount: 670,
    discountAmount: 50,
    paidAmount: 670,
    dueAmount: 0,
    pay: false
  },
  {
    slNo: 10,
    serviceDate: '2025-06-12',
    serviceProvider: 'Rapid Service Garage',
    vehicleNo: 'KA10QR9900',
    lastMeterReading: 51200,
    serviceCharge: 300,
    totalServiceAmount: 320,
    discountAmount: 20,
    paidAmount: 150,
    dueAmount: 170,
    pay: true
  },
];



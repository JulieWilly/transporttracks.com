import { Component } from '@angular/core';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-vehicle-hire-register',
  imports: [
    SharableTableComponent,
    SharableTitleComponent,
    SharableSearchInputComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './vehicle-hire-register.component.html',
  styleUrl: './vehicle-hire-register.component.css',
})
export class VehicleHireRegisterComponent {
  dataSource = new MatTableDataSource(HIRE_DATA);
  displayedColumns: string[] = [
    'sl',
    'hireDetails',
    'vehicleDetails',
    'manifestDetails',
    'chargeAmount',
    'advance',
    'paid',
    'payExpense',
    'charges',
    'print',
    'more',
  ];

  addNewLoadSlip() {
    alert('this will click a button');
  }
}


export interface HireRecord {
  sl: number;
  hireDetails: string;
  vehicleDetails: string;
  manifestDetails: string;
  chargeAmount: number;
  advance: number;
  paid: number;
  payExpense: string;
  charges: string;
  print: string;
  more: string;
}

export const HIRE_DATA: HireRecord[] = [
  {
    sl: 1,
    hireDetails: 'Hire #001',
    vehicleDetails: 'KA01AB1234 - Truck',
    manifestDetails: 'Manifest A',
    chargeAmount: 12000,
    advance: 4000,
    paid: 8000,
    payExpense: 'Paid Online',
    charges: 'Fuel + Driver',
    print: 'Print',
    more: 'View',
  },
  {
    sl: 2,
    hireDetails: 'Hire #002',
    vehicleDetails: 'MH12CD5678 - Lorry',
    manifestDetails: 'Manifest B',
    chargeAmount: 15000,
    advance: 5000,
    paid: 10000,
    payExpense: 'Cash',
    charges: 'Driver + Maintenance',
    print: 'Print',
    more: 'View',
  },
  {
    sl: 3,
    hireDetails: 'Hire #003',
    vehicleDetails: 'DL04EF9012 - Van',
    manifestDetails: 'Manifest C',
    chargeAmount: 10000,
    advance: 3000,
    paid: 7000,
    payExpense: 'Bank Transfer',
    charges: 'Fuel Only',
    print: 'Print',
    more: 'View',
  },
  {
    sl: 4,
    hireDetails: 'Hire #004',
    vehicleDetails: 'TN07GH3456 - Truck',
    manifestDetails: 'Manifest D',
    chargeAmount: 18000,
    advance: 6000,
    paid: 12000,
    payExpense: 'Cheque',
    charges: 'Fuel + Repair',
    print: 'Print',
    more: 'View',
  },
  {
    sl: 5,
    hireDetails: 'Hire #005',
    vehicleDetails: 'AP03IJ7890 - Trailer',
    manifestDetails: 'Manifest E',
    chargeAmount: 13000,
    advance: 4000,
    paid: 9000,
    payExpense: 'UPI',
    charges: 'Misc.',
    print: 'Print',
    more: 'View',
  },
  {
    sl: 6,
    hireDetails: 'Hire #006',
    vehicleDetails: 'KA01XY5678 - Truck',
    manifestDetails: 'Manifest F',
    chargeAmount: 14000,
    advance: 5000,
    paid: 9000,
    payExpense: 'Cash',
    charges: 'Toll + Driver',
    print: 'Print',
    more: 'View',
  },
  {
    sl: 7,
    hireDetails: 'Hire #007',
    vehicleDetails: 'MH12QR1234 - Lorry',
    manifestDetails: 'Manifest G',
    chargeAmount: 16000,
    advance: 6000,
    paid: 10000,
    payExpense: 'Online',
    charges: 'Driver + Misc.',
    print: 'Print',
    more: 'View',
  },
  {
    sl: 8,
    hireDetails: 'Hire #008',
    vehicleDetails: 'DL04YZ5678 - Van',
    manifestDetails: 'Manifest H',
    chargeAmount: 11000,
    advance: 2000,
    paid: 9000,
    payExpense: 'UPI',
    charges: 'Fuel',
    print: 'Print',
    more: 'View',
  },
  {
    sl: 9,
    hireDetails: 'Hire #009',
    vehicleDetails: 'TN07AB9012 - Truck',
    manifestDetails: 'Manifest I',
    chargeAmount: 17000,
    advance: 7000,
    paid: 10000,
    payExpense: 'Bank Transfer',
    charges: 'Driver + Fuel',
    print: 'Print',
    more: 'View',
  },
  {
    sl: 10,
    hireDetails: 'Hire #010',
    vehicleDetails: 'AP03CD3456 - Trailer',
    manifestDetails: 'Manifest J',
    chargeAmount: 12500,
    advance: 2500,
    paid: 10000,
    payExpense: 'Cash',
    charges: 'Maintenance',
    print: 'Print',
    more: 'View',
  },
];


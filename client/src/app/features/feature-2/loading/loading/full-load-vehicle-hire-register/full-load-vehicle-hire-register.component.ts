import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { StatementsBtnComponent } from '../../../../ReuseableComponents/statements-btn/statements-btn.component';
import { BackComponent } from '../../../../ReuseableComponents/back/back.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { ShortDropDown1Component } from '../../../../ReuseableComponents/short-drop-down-1/short-drop-down-1.component';
import { ExpandableTableComponent } from '../../../../ReuseableComponents/expandable-table/expandable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-full-load-vehicle-hire-register',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    StatementsBtnComponent,
    BackComponent,
    SharableSearchInputComponent,
    ShortDropDown1Component,
    ExpandableTableComponent,
  ],
  templateUrl: './full-load-vehicle-hire-register.component.html',
  styleUrl: './full-load-vehicle-hire-register.component.css',
})
export class FullLoadVehicleHireRegisterComponent {
  currentPage: string = 'Full Load Vehicle Hire Register';
  dropDownInput: string[] = ['Filter by ownership type', 'HIRED', 'OWNED'];
  placeholderText: string = 'Vehicle / LR No';

  displayedColumns: string[] = [
    'sl',
    'hireDetails',
    'vehicleDetails',
    'lrDetails',
    'chargeAmount',
    'advance',
    'paid',
    'payExpense',
    'more',
    'actions'
  ];

  columnHeaders: Record<string, string> = {
    sl: 'Sl',
    hireDetails: 'Hire Details',
    vehicleDetails: 'Vehicle Details',
    lrDetails: 'LR Details',
    chargeAmount: 'Charge Amt.',
    advance: 'Advance',
    paid: 'Paid',
    payExpense: 'Pay/Expense',
    more: 'More',
    actions:'Actions'
  };

  dataSource = new MatTableDataSource(hireData);
}

export interface HireRecord {
  sl: number;
  hireDetails: string;
  vehicleDetails: string;
  lrDetails: string;
  chargeAmount: number;
  advance: number;
  paid: number;
  payExpense: string;
  edit: string;
  print: string;
  more: string;
}

export const hireData: HireRecord[] = [
  {
    sl: 1,
    hireDetails: 'H-1001 | 2025-06-01',
    vehicleDetails: 'KA-01-AA-1001 | Tata Ace',
    lrDetails: 'LR001 | Bangalore to Mysore',
    chargeAmount: 12000,
    advance: 3000,
    paid: 8000,
    payExpense: 'Pay Now',
    edit: 'Edit',
    print: 'Print',
    more: '',
  },
  {
    sl: 2,
    hireDetails: 'H-1002 | 2025-06-02',
    vehicleDetails: 'KA-02-BB-2002 | Eicher',
    lrDetails: 'LR002 | Chennai to Hyderabad',
    chargeAmount: 18000,
    advance: 5000,
    paid: 15000,
    payExpense: 'Pay Now',
    edit: 'Edit',
    print: 'Print',
    more: '',
  },
  {
    sl: 3,
    hireDetails: 'H-1003 | 2025-06-03',
    vehicleDetails: 'TN-03-CC-3003 | Ashok Leyland',
    lrDetails: 'LR003 | Madurai to Salem',
    chargeAmount: 10000,
    advance: 2000,
    paid: 6000,
    payExpense: 'Pay Now',
    edit: 'Edit',
    print: 'Print',
    more: '',
  },
  {
    sl: 4,
    hireDetails: 'H-1004 | 2025-06-04',
    vehicleDetails: 'MH-04-DD-4004 | Mahindra',
    lrDetails: 'LR004 | Pune to Mumbai',
    chargeAmount: 15000,
    advance: 7000,
    paid: 15000,
    payExpense: 'Paid',
    edit: 'Edit',
    print: 'Print',
    more: '',
  },
  {
    sl: 5,
    hireDetails: 'H-1005 | 2025-06-05',
    vehicleDetails: 'AP-05-EE-5005 | Tata 407',
    lrDetails: 'LR005 | Vizag to Guntur',
    chargeAmount: 13000,
    advance: 4000,
    paid: 9000,
    payExpense: 'Pay Now',
    edit: 'Edit',
    print: 'Print',
    more: '',
  },
  {
    sl: 6,
    hireDetails: 'H-1006 | 2025-06-06',
    vehicleDetails: 'KL-06-FF-6006 | Force Tempo',
    lrDetails: 'LR006 | Kochi to Thrissur',
    chargeAmount: 11000,
    advance: 3000,
    paid: 7000,
    payExpense: 'Pay Now',
    edit: 'Edit',
    print: 'Print',
    more: '',
  },
  {
    sl: 7,
    hireDetails: 'H-1007 | 2025-06-07',
    vehicleDetails: 'TS-07-GG-7007 | Piaggio',
    lrDetails: 'LR007 | Hyderabad to Warangal',
    chargeAmount: 9000,
    advance: 2000,
    paid: 9000,
    payExpense: 'Paid',
    edit: 'Edit',
    print: 'Print',
    more: '',
  },
  {
    sl: 8,
    hireDetails: 'H-1008 | 2025-06-08',
    vehicleDetails: 'GJ-08-HH-8008 | Eicher',
    lrDetails: 'LR008 | Ahmedabad to Rajkot',
    chargeAmount: 14000,
    advance: 6000,
    paid: 10000,
    payExpense: 'Pay Now',
    edit: 'Edit',
    print: 'Print',
    more: '',
  },
  {
    sl: 9,
    hireDetails: 'H-1009 | 2025-06-09',
    vehicleDetails: 'RJ-09-II-9009 | Swaraj Mazda',
    lrDetails: 'LR009 | Jaipur to Udaipur',
    chargeAmount: 16000,
    advance: 5000,
    paid: 15000,
    payExpense: 'Pay Now',
    edit: 'Edit',
    print: 'Print',
    more: '',
  },
  {
    sl: 10,
    hireDetails: 'H-1010 | 2025-06-10',
    vehicleDetails: 'DL-10-JJ-1010 | Tata Ace',
    lrDetails: 'LR010 | Delhi to Agra',
    chargeAmount: 17000,
    advance: 8000,
    paid: 17000,
    payExpense: 'Paid',
    edit: 'Edit',
    print: 'Print',
    more: '',
  },
];

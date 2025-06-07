import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { AddBtnComponent } from '../../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { MatTableDataSource } from '@angular/material/table';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';



@Component({
  selector: 'app-petrol-pump-register',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    SharableTableComponent
  ],
  templateUrl: './petrol-pump-register.component.html',
  styleUrl: './petrol-pump-register.component.css',
})
export class PetrolPumpRegisterComponent {
  currentPage: string = 'Manage Petrol Pumps';
  btnName: string = 'Add New Petrol Pump';
  placeholderText: string = 'Petrol Pump Name';

  dataSource = new MatTableDataSource(PETROL_PUMPS);

  columnHeaders: Record<string, string> = {
    sl: 'Sl.',
    petrolPumpName: 'Petrol Pump Name',
    mobileNo: 'Mobile No',
    address: 'Address',
    actions: 'Edit',
    status: 'Status',
  };

  displayedColumns: string[] = [
    'sl',
    'petrolPumpName',
    'mobileNo',
    'address',
    'actions',
    'status',
  ];
}

export interface PetrolPump {
  sl: number;
  petrolPumpName: string;
  mobileNo: string;
  address: string;
  status: string;
}


export const PETROL_PUMPS: PetrolPump[] = [
  {
    sl: 1,
    petrolPumpName: 'Speed Fuel Station',
    mobileNo: '9876543210',
    address: '123 Main St, Mumbai',
    status: '',
  },
  {
    sl: 2,
    petrolPumpName: 'Prime Petrol',
    mobileNo: '9123456789',
    address: '45 Park Avenue, Delhi',
    status: '',
  },
  {
    sl: 3,
    petrolPumpName: 'Fuel Fast',
    mobileNo: '9988776655',
    address: '67 Ring Road, Bangalore',
    status: '',
  },
  {
    sl: 4,
    petrolPumpName: 'GasPro Station',
    mobileNo: '9871122334',
    address: '89 Market Street, Chennai',
    status: '',
  },
  {
    sl: 5,
    petrolPumpName: 'EcoFuel Center',
    mobileNo: '9812345678',
    address: '21 Green Park, Hyderabad',
    status: '',
  },
  {
    sl: 6,
    petrolPumpName: 'QuickFill',
    mobileNo: '9765432109',
    address: '34 Oak Street, Pune',
    status: '',
  },
  {
    sl: 7,
    petrolPumpName: 'PowerPump',
    mobileNo: '9854321765',
    address: '12 Palm Road, Kolkata',
    status: '',
  },
  {
    sl: 8,
    petrolPumpName: 'Jet Fuel',
    mobileNo: '9933445566',
    address: '78 Lake View, Jaipur',
    status: '',
  },
  {
    sl: 9,
    petrolPumpName: 'Turbo Fuel',
    mobileNo: '9876655443',
    address: '56 Hill Street, Lucknow',
    status: '',
  },
  {
    sl: 10,
    petrolPumpName: 'Metro Petrol',
    mobileNo: '9844332211',
    address: '90 River Road, Chandigarh',
    status: '',
  },
];


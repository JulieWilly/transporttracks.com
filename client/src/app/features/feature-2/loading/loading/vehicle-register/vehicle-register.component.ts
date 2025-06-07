import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { MatTableDataSource } from '@angular/material/table';
import { AddBtnComponent } from '../../../../ReuseableComponents/add-btn/add-btn.component';
import { ShortDropDown1Component } from '../../../../ReuseableComponents/short-drop-down-1/short-drop-down-1.component';

@Component({
  selector: 'app-vehicle-register',
  imports: [
    QuickNavigationComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
    SharableTitleComponent,
    AddBtnComponent,
    ShortDropDown1Component,
  ],
  templateUrl: './vehicle-register.component.html',
  styleUrl: './vehicle-register.component.css',
})
export class VehicleRegisterComponent {
  placeholderText: string = 'Search by Vehicle No';
  btnName: string = 'Add new vehicle registration';

  dropDownInput: string[] = ['Owned', 'Hired'];
  dataSource = new MatTableDataSource(vehicleData);

  displayedColumns: string[] = [
    'slNo',
    'vehicleNo',
    'vehicleType',
    'weight',
    'ownerDetails',
    'driverDetails',
    'docValidity',
    'inspection',
    'active',
    'trip',
    'service',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'Sl No',
    vehicleNo: 'Vehicle No',
    vehicleType: 'Vehicle Type',
    weight: 'Weight',
    ownerDetails: 'Owner Details',
    driverDetails: 'Driver Details',
    docValidity: 'Doc. Validity',
    inspection: 'Inspection',
    active: 'Active',
    trip: 'Trip',
    service: 'Service',
    actions: 'Actions',
  };

  currentPage: string = 'Manage Vehicle Register';
}

export interface VehicleRecord {
  slNo: number;
  vehicleNo: string;
  vehicleType: string;
  weight: string;
  ownerDetails: string;
  driverDetails: string;
  docValidity: string;
  inspection: string;
  edit: boolean;
  delete: boolean;
  active: boolean;
  trip: boolean;
  service: boolean;
}

export const vehicleData: VehicleRecord[] = [
  {
    slNo: 1,
    vehicleNo: 'KA01AB1234',
    vehicleType: 'Truck',
    weight: '10T',
    ownerDetails: 'Raj Transport',
    driverDetails: 'Ramesh | 9876543210',
    docValidity: '',
    inspection: '',
    edit: true,
    delete: true,
    active: true,
    trip: false,
    service: false,
  },
  {
    slNo: 2,
    vehicleNo: 'MH12CD5678',
    vehicleType: 'Van',
    weight: '3T',
    ownerDetails: 'Vijay Movers',
    driverDetails: 'Suresh | 9012345678',
    docValidity: '',
    inspection: '',
    edit: true,
    delete: true,
    active: false,
    trip: true,
    service: false,
  },
  {
    slNo: 3,
    vehicleNo: 'DL03EF9101',
    vehicleType: 'Trailer',
    weight: '20T',
    ownerDetails: 'Sharma Logistics',
    driverDetails: 'Naresh | 9988776655',
    docValidity: '',
    inspection: '',
    edit: true,
    delete: true,
    active: true,
    trip: true,
    service: true,
  },
  {
    slNo: 4,
    vehicleNo: 'GJ04GH1111',
    vehicleType: 'Mini Truck',
    weight: '5T',
    ownerDetails: 'Green Cargo',
    driverDetails: 'Ganesh | 9786543210',
    docValidity: '',
    inspection: '',
    edit: true,
    delete: true,
    active: false,
    trip: false,
    service: true,
  },
  {
    slNo: 5,
    vehicleNo: 'TN05IJ2222',
    vehicleType: 'Van',
    weight: '3.5T',
    ownerDetails: 'Tamil Haulers',
    driverDetails: 'Ravi | 9090909090',
    docValidity: '',
    inspection: '',
    edit: true,
    delete: true,
    active: true,
    trip: false,
    service: false,
  },
  {
    slNo: 6,
    vehicleNo: 'AP06KL3333',
    vehicleType: 'Truck',
    weight: '15T',
    ownerDetails: 'Andhra Logistics',
    driverDetails: 'Babu | 9123456789',
    docValidity: '',
    inspection: '',
    edit: true,
    delete: true,
    active: false,
    trip: false,
    service: false,
  },
  {
    slNo: 7,
    vehicleNo: 'RJ07MN4444',
    vehicleType: 'Trailer',
    weight: '18T',
    ownerDetails: 'Rajasthan Carriers',
    driverDetails: 'Rohit | 9823456712',
    docValidity: '',
    inspection: '',
    edit: true,
    delete: true,
    active: true,
    trip: true,
    service: false,
  },
  {
    slNo: 8,
    vehicleNo: 'MP08OP5555',
    vehicleType: 'Truck',
    weight: '12T',
    ownerDetails: 'MP Cargo',
    driverDetails: 'Harish | 9845123789',
    docValidity: '',
    inspection: '',
    edit: true,
    delete: true,
    active: true,
    trip: false,
    service: false,
  },
  {
    slNo: 9,
    vehicleNo: 'WB09QR6666',
    vehicleType: 'Mini Van',
    weight: '2T',
    ownerDetails: 'East Express',
    driverDetails: 'Nitin | 9876123450',
    docValidity: '',
    inspection: '',
    edit: true,
    delete: true,
    active: false,
    trip: false,
    service: true,
  },
  {
    slNo: 10,
    vehicleNo: 'CH10ST7777',
    vehicleType: 'Truck',
    weight: '8T',
    ownerDetails: 'Chandigarh Movers',
    driverDetails: 'Ajay | 9001122233',
    docValidity: '',
    inspection: '',
    edit: true,
    delete: true,
    active: true,
    trip: true,
    service: true,
  },
];

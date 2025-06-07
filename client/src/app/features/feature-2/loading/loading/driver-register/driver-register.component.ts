import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { AddBtnComponent } from '../../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-driver-register',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './driver-register.component.html',
  styleUrl: './driver-register.component.css',
})
export class DriverRegisterComponent {
  currentPage: string = "Driver's List";
  btnName: string = 'Add New Driver';
  placeholderText: string = 'Driver Name';

  displayedColumns: string[] = [
    'sl',
    'driverName',
    'mobileNo',
    'address',
    'joiningDate',
    'docValidity',
    'status',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    sl: 'Sl.',
    driverName: 'Driver Name',
    mobileNo: 'Mobile No',
    address: 'Address',
    joiningDate: 'Joining Date',
    docValidity: 'Document',
    status: 'Status',
    actions: 'Edit',
  };

  dataSource = new MatTableDataSource(DRIVER_RECORDS);
}


export interface DriverRecord {
  sl: number;
  driverName: string;
  mobileNo: string;
  address: string;
  joiningDate: string;
  document: string;
  status: string;
}


export const DRIVER_RECORDS: DriverRecord[] = [
  {
    sl: 1,
    driverName: 'Raj Kumar',
    mobileNo: '9876543210',
    address: 'Delhi, India',
    joiningDate: '2023-01-10',
    document: 'license_raj.pdf',
    status: '',
  },
  {
    sl: 2,
    driverName: 'Amit Sharma',
    mobileNo: '9123456780',
    address: 'Mumbai, India',
    joiningDate: '2022-11-25',
    document: 'license_amit.pdf',
    status: '',
  },
  {
    sl: 3,
    driverName: 'Sita Verma',
    mobileNo: '9991234567',
    address: 'Lucknow, India',
    joiningDate: '2023-03-15',
    document: 'license_sita.pdf',
    status: '',
  },
  {
    sl: 4,
    driverName: 'Rohit Das',
    mobileNo: '9812345678',
    address: 'Kolkata, India',
    joiningDate: '2021-08-03',
    document: 'license_rohit.pdf',
    status: '',
  },
  {
    sl: 5,
    driverName: 'Neha Jain',
    mobileNo: '9786543210',
    address: 'Chandigarh, India',
    joiningDate: '2022-05-12',
    document: 'license_neha.pdf',
    status: '',
  },
  {
    sl: 6,
    driverName: 'Arun Rao',
    mobileNo: '9865321478',
    address: 'Hyderabad, India',
    joiningDate: '2021-12-01',
    document: 'license_arun.pdf',
    status: '',
  },
  {
    sl: 7,
    driverName: 'Farhan Ali',
    mobileNo: '9945123687',
    address: 'Bangalore, India',
    joiningDate: '2023-06-20',
    document: 'license_farhan.pdf',
    status: '',
  },
  {
    sl: 8,
    driverName: 'Meera Sen',
    mobileNo: '9823456789',
    address: 'Pune, India',
    joiningDate: '2022-02-28',
    document: 'license_meera.pdf',
    status: '',
  },
  {
    sl: 9,
    driverName: 'Vikas Singh',
    mobileNo: '9811223344',
    address: 'Patna, India',
    joiningDate: '2023-04-18',
    document: 'license_vikas.pdf',
    status: '',
  },
  {
    sl: 10,
    driverName: 'Divya Reddy',
    mobileNo: '9873412567',
    address: 'Visakhapatnam, India',
    joiningDate: '2021-09-30',
    document: 'license_divya.pdf',
    status: '',
  },
];

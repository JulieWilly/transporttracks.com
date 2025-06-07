import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { AddBtnComponent } from '../../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { MatTableDataSource } from '@angular/material/table';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';

@Component({
  selector: 'app-vehicle-vendors',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './vehicle-vendors.component.html',
  styleUrl: './vehicle-vendors.component.css',
})
export class VehicleVendorsComponent {
  currentPage: string = ' Manage Vehicle Vendors';
  btnName: string = 'Add New Vendor';
  placeholderText: string = 'Vendor Name';
  dataSource = new MatTableDataSource(PERSON_RECORDS);
  columnHeaders: Record<string, string> = {
    sl: 'Sl.',
    name: 'Name',
    mobileNo: 'Mobile No',
    address: 'Address',
    actions: 'Edit',
    status: 'Status',
  };

  displayedColumns: string[] = [
    'sl',
    'name',
    'mobileNo',
    'address',
    'actions',
    'status',
  ];
}

export interface PersonRecord {
  sl: number;
  name: string;
  mobileNo: string;
  address: string;
  status: string;
}

export const PERSON_RECORDS: PersonRecord[] = [
  {
    sl: 1,
    name: 'Rahul Mehta',
    mobileNo: '9876543210',
    address: 'Delhi',
    status: '',
  },
  {
    sl: 2,
    name: 'Priya Sharma',
    mobileNo: '9123456789',
    address: 'Mumbai',
    status: '',
  },
  {
    sl: 3,
    name: 'Aman Verma',
    mobileNo: '9988776655',
    address: 'Kolkata',
    status: '',
  },
  {
    sl: 4,
    name: 'Sneha Roy',
    mobileNo: '9811223344',
    address: 'Bangalore',
    status: '',
  },
  {
    sl: 5,
    name: 'Vikram Singh',
    mobileNo: '9765432101',
    address: 'Jaipur',
    status: '',
  },
  {
    sl: 6,
    name: 'Ritu Kapoor',
    mobileNo: '9834567890',
    address: 'Chandigarh',
    status: '',
  },
  {
    sl: 7,
    name: 'Nikhil Das',
    mobileNo: '9911223344',
    address: 'Lucknow',
    status: '',
  },
  {
    sl: 8,
    name: 'Divya Reddy',
    mobileNo: '9844123456',
    address: 'Hyderabad',
    status: '',
  },
  {
    sl: 9,
    name: 'Farhan Khan',
    mobileNo: '9933445566',
    address: 'Ahmedabad',
    status: '',
  },
  {
    sl: 10,
    name: 'Meera Joshi',
    mobileNo: '9876123450',
    address: 'Pune',
    status: '',
  },
];

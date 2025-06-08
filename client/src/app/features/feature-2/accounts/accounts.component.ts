import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../ReuseableComponents/sharable-title/sharable-title.component';
import { AddBtnComponent } from '../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { ShortDropDown1Component } from '../../ReuseableComponents/short-drop-down-1/short-drop-down-1.component';
import { SharableTableComponent } from '../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-accounts',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    ShortDropDown1Component,
    SharableTableComponent,
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent {
  currentPage: string = 'Account List';
  btnName: string = 'Add New Account';
  placeholderText: string = 'Account / GSTIN / City';
  dropDownInput: string[] = ['All', 'Name', 'Mobile', 'GSTIN', 'City'];

  displayedColumns: string[] = [
    'id',
    'accountName',
    'address',
    'state',
    'city',
    'pinNo',
    'phoneNo',
    'gstNo',
    'accountGroup',
    'actions',
    'active',
  ];

  columnHeaders: Record<string, string> = {
    id: 'Sl.No.',
    accountName: 'Account Name',
    address: 'Address',
    state: 'State',
    city: 'City',
    pinNo: 'Pin No',
    phoneNo: 'Phone No',
    gstNo: 'GST No',
    accountGroup: 'Account Group',
    actions: 'Edit',
    active: 'Active',
  };

  dataSource = new MatTableDataSource(accountRecords);
}

export interface AccountRecord {
  id: number;
  accountName: string;
  address: string;
  state: string;
  city: string;
  pinNo: string;
  phoneNo: string;
  gstNo: string;
  accountGroup: string;
  active: string;
}

export const accountRecords: AccountRecord[] = [
  {
    id: 1,
    accountName: 'ABC Traders',
    address: '123 Main St',
    state: 'Karnataka',
    city: 'Bangalore',
    pinNo: '560001',
    phoneNo: '9876543210',
    gstNo: '29ABCDE1234F1Z5',
    accountGroup: 'Sundry Debtors',
    active: '',
  },
  {
    id: 2,
    accountName: 'XYZ Exports',
    address: '456 Market Rd',
    state: 'Tamil Nadu',
    city: 'Chennai',
    pinNo: '600001',
    phoneNo: '9823456789',
    gstNo: '33XYZDE5678K2Z6',
    accountGroup: 'Sundry Creditors',
    active: '',
  },
  {
    id: 3,
    accountName: 'Fast Logistics',
    address: '78 Transport Ln',
    state: 'Maharashtra',
    city: 'Mumbai',
    pinNo: '400001',
    phoneNo: '9812345678',
    gstNo: '27FASTL1234M7Z3',
    accountGroup: 'Transporters',
    active: '',
  },
  {
    id: 4,
    accountName: 'Green Supplies',
    address: '99 Garden St',
    state: 'Kerala',
    city: 'Kochi',
    pinNo: '682001',
    phoneNo: '9786543210',
    gstNo: '32GRNSU5678R4Z9',
    accountGroup: 'Vendors',
    active: '',
  },
  {
    id: 5,
    accountName: 'Blue Ocean Co.',
    address: '22 Beach Rd',
    state: 'Goa',
    city: 'Panaji',
    pinNo: '403001',
    phoneNo: '9870123456',
    gstNo: '30BLUOC9999F6Z2',
    accountGroup: 'Customers',
    active: '',
  },
  {
    id: 6,
    accountName: 'Hilltop Constructions',
    address: '44 Hill View',
    state: 'Himachal Pradesh',
    city: 'Shimla',
    pinNo: '171001',
    phoneNo: '9867567890',
    gstNo: '02HTCON1234R8Z1',
    accountGroup: 'Contractors',
    active: '',
  },
  {
    id: 7,
    accountName: 'Metro Distributors',
    address: '11 Central Park',
    state: 'Delhi',
    city: 'New Delhi',
    pinNo: '110001',
    phoneNo: '9811111111',
    gstNo: '07MTRDS2345Q2Z7',
    accountGroup: 'Distributors',
    active: '',
  },
  {
    id: 8,
    accountName: 'Sunrise Electronics',
    address: '65 Tech City',
    state: 'Telangana',
    city: 'Hyderabad',
    pinNo: '500001',
    phoneNo: '9876540000',
    gstNo: '36SRELN5432T4Z8',
    accountGroup: 'Retailers',
    active: '',
  },
  {
    id: 9,
    accountName: 'Classic Motors',
    address: '12 Auto Ave',
    state: 'Punjab',
    city: 'Ludhiana',
    pinNo: '141001',
    phoneNo: '9888888888',
    gstNo: '03CLMOT8765B2Z0',
    accountGroup: 'Dealers',
    active: '',
  },
  {
    id: 10,
    accountName: 'Eco Green Ltd.',
    address: '88 Nature Blvd',
    state: 'West Bengal',
    city: 'Kolkata',
    pinNo: '700001',
    phoneNo: '9898989898',
    gstNo: '19ECOGN7654P1Z3',
    accountGroup: 'Manufacturers',
    active: '',
  },
];


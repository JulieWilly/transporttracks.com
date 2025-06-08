import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { ShortDropDown1Component } from '../../../ReuseableComponents/short-drop-down-1/short-drop-down-1.component';
import { MatTableDataSource } from '@angular/material/table';
import { ExpandableTableComponent } from '../../../ReuseableComponents/expandable-table/expandable-table.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';

@Component({
  selector: 'app-incoming-booking-register',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    ShortDropDown1Component,
    ExpandableTableComponent,
    SharableSearchInputComponent
  ],
  templateUrl: './incoming-booking-register.component.html',
  styleUrl: './incoming-booking-register.component.css',
})
export class IncomingBookingRegisterComponent {
  currentPage: string = 'Incoming Register';
  dropDownInput: string[] = ['Only Incoming', 'All'];
  placeholderText:string = 'CN No/Consignee Name/Mobile'

  dataSource = new MatTableDataSource(consignmentCollections);
  displayedColumns: string[] = [
    'id',
    'cnNo',
    'consignor',
    'consignee',
    'fromViaTo',
    'payType',
    'amount',
    'received',
    'discount',
    'due',
    'branch',
    'status',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    id: '#',
    cnNo: 'CN No',
    consignor: 'Consignor',
    consignee: 'Consignee',
    fromViaTo: 'From-Via-To',
    payType: 'Pay.',
    amount: 'Amount',
    received: 'Rec.',
    discount: 'Dis.',
    due: 'Due',
    branch: 'Branch',
    status: 'Status',
    actions: 'Actions',
  };
}

export interface ConsignmentCollection {
  id: number;
  cnNo: string;
  consignor: string;
  consignee: string;
  fromViaTo: string;
  payType: string;
  amount: number;
  received: number;
  discount: number;
  due: number;
  branch: string;
  status: string;
}

export const consignmentCollections: ConsignmentCollection[] = [
  {
    id: 1,
    cnNo: 'CN5001',
    consignor: 'Alpha Traders',
    consignee: 'Beta Stores',
    fromViaTo: 'Chennai-Vellore-Salem',
    payType: 'To Pay',
    amount: 5000,
    received: 2000,
    discount: 300,
    due: 2700,
    branch: 'Chennai',
    status: 'Pending',
  },
  {
    id: 2,
    cnNo: 'CN5002',
    consignor: 'Shine Electronics',
    consignee: 'Quick Mart',
    fromViaTo: 'Delhi-Agra-Kanpur',
    payType: 'Paid',
    amount: 8000,
    received: 8000,
    discount: 0,
    due: 0,
    branch: 'Delhi',
    status: 'Completed',
  },
  {
    id: 3,
    cnNo: 'CN5003',
    consignor: 'Kavya Textiles',
    consignee: 'Modern Styles',
    fromViaTo: 'Mumbai-Nashik-Pune',
    payType: 'To Pay',
    amount: 6000,
    received: 3000,
    discount: 0,
    due: 3000,
    branch: 'Mumbai',
    status: 'In Transit',
  },
  {
    id: 4,
    cnNo: 'CN5004',
    consignor: 'Jaya Foods',
    consignee: 'Fresh Bazaar',
    fromViaTo: 'Kolkata-Asansol-Dhanbad',
    payType: 'Paid',
    amount: 7000,
    received: 7000,
    discount: 0,
    due: 0,
    branch: 'Kolkata',
    status: 'Completed',
  },
  {
    id: 5,
    cnNo: 'CN5005',
    consignor: 'Bright Pharma',
    consignee: 'Medi Health',
    fromViaTo: 'Hyderabad-Kurnool-Anantapur',
    payType: 'To Pay',
    amount: 4500,
    received: 2000,
    discount: 200,
    due: 2300,
    branch: 'Hyderabad',
    status: 'Pending',
  },
  {
    id: 6,
    cnNo: 'CN5006',
    consignor: 'Eco Traders',
    consignee: 'Green Mart',
    fromViaTo: 'Bangalore-Mysore-Mangalore',
    payType: 'Paid',
    amount: 9000,
    received: 9000,
    discount: 0,
    due: 0,
    branch: 'Bangalore',
    status: 'Completed',
  },
  {
    id: 7,
    cnNo: 'CN5007',
    consignor: 'Royal Fabrics',
    consignee: 'Elite Fashion',
    fromViaTo: 'Ahmedabad-Baroda-Surat',
    payType: 'To Pay',
    amount: 4800,
    received: 2800,
    discount: 0,
    due: 2000,
    branch: 'Ahmedabad',
    status: 'In Transit',
  },
  {
    id: 8,
    cnNo: 'CN5008',
    consignor: 'Golden Spices',
    consignee: 'Tasty World',
    fromViaTo: 'Jaipur-Kota-Udaipur',
    payType: 'Paid',
    amount: 5200,
    received: 5200,
    discount: 0,
    due: 0,
    branch: 'Jaipur',
    status: 'Completed',
  },
  {
    id: 9,
    cnNo: 'CN5009',
    consignor: 'Techno Solutions',
    consignee: 'Future Tech',
    fromViaTo: 'Lucknow-Kanpur-Allahabad',
    payType: 'To Pay',
    amount: 6500,
    received: 3500,
    discount: 0,
    due: 3000,
    branch: 'Lucknow',
    status: 'Pending',
  },
  {
    id: 10,
    cnNo: 'CN5010',
    consignor: 'Sun Agro',
    consignee: 'Organic World',
    fromViaTo: 'Patna-Muzaffarpur-Darbhanga',
    payType: 'Paid',
    amount: 6100,
    received: 6100,
    discount: 0,
    due: 0,
    branch: 'Patna',
    status: 'Completed',
  },
];


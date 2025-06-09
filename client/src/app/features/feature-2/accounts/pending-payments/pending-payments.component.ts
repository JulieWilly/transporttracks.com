import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { BackComponent } from '../../../ReuseableComponents/back/back.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { ShortDropDown1Component } from '../../../ReuseableComponents/short-drop-down-1/short-drop-down-1.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-pending-payments',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    BackComponent,
    SharableTableComponent,
    SharableSearchInputComponent,
    ShortDropDown1Component,
  ],
  templateUrl: './pending-payments.component.html',
  styleUrl: './pending-payments.component.css',
})
export class PendingPaymentsComponent {
  currentPage: string = 'Pending Payment Management';
  placeholderText: string = 'Consignee/CN No/ Manual CN No';
  dropDownInput: string[] = [
    'Filter Payment Term',
    'Paid',
    'To Pay',
    'To Be Billled',
  ];

  dataSource = new MatTableDataSource(CREDIT_NOTES);
  displayedColumns: string[] = [
    'slNo',
    'cnNo',
    'cnDate',
    'consignor',
    'consignee',
    'from',
    'to',
    'paymentTerm',
    'billingAmount',
    'receivedAmount',
    'dueAmount',
    'collect',
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    cnNo: 'CN No',
    cnDate: 'CN Date',
    consignor: 'Consignor',
    consignee: 'Consignee',
    from: 'From',
    to: 'To',
    paymentTerm: 'Payment Term',
    billingAmount: 'Billing Amt.',
    receivedAmount: 'Received Amt.',
    dueAmount: 'Due Amt.',
    collect: 'Collect',
  };
}


 export interface CreditNote {
   slNo: number;
   cnNo: string;
   cnDate: string;
   consignor: string;
   consignee: string;
   from: string;
   to: string;
   paymentTerm: string;
   billingAmount: number;
   receivedAmount: number;
   dueAmount: number;
 }

 export const CREDIT_NOTES: CreditNote[] = [
   {
     slNo: 1,
     cnNo: 'CN001',
     cnDate: '2025-06-01',
     consignor: 'ABC Logistics',
     consignee: 'XYZ Retail',
     from: 'Delhi',
     to: 'Mumbai',
     paymentTerm: 'Prepaid',
     billingAmount: 10000,
     receivedAmount: 8000,
     dueAmount: 2000,
   },
   {
     slNo: 2,
     cnNo: 'CN002',
     cnDate: '2025-06-02',
     consignor: 'Fast Movers',
     consignee: 'TechWorld',
     from: 'Bangalore',
     to: 'Hyderabad',
     paymentTerm: 'To Pay',
     billingAmount: 12000,
     receivedAmount: 12000,
     dueAmount: 0,
   },
   {
     slNo: 3,
     cnNo: 'CN003',
     cnDate: '2025-06-03',
     consignor: 'TransCare',
     consignee: 'NextGen Foods',
     from: 'Chennai',
     to: 'Kolkata',
     paymentTerm: 'Credit',
     billingAmount: 15000,
     receivedAmount: 5000,
     dueAmount: 10000,
   },
   {
     slNo: 4,
     cnNo: 'CN004',
     cnDate: '2025-06-04',
     consignor: 'Green Hauliers',
     consignee: 'Modern Textiles',
     from: 'Ahmedabad',
     to: 'Jaipur',
     paymentTerm: 'Prepaid',
     billingAmount: 18000,
     receivedAmount: 18000,
     dueAmount: 0,
   },
   {
     slNo: 5,
     cnNo: 'CN005',
     cnDate: '2025-06-05',
     consignor: 'Express Link',
     consignee: 'Daily Essentials',
     from: 'Pune',
     to: 'Nagpur',
     paymentTerm: 'Credit',
     billingAmount: 11000,
     receivedAmount: 7000,
     dueAmount: 4000,
   },
   {
     slNo: 6,
     cnNo: 'CN006',
     cnDate: '2025-06-06',
     consignor: 'QuickTrans',
     consignee: 'Furniture Mart',
     from: 'Lucknow',
     to: 'Kanpur',
     paymentTerm: 'To Pay',
     billingAmount: 9000,
     receivedAmount: 9000,
     dueAmount: 0,
   },
   {
     slNo: 7,
     cnNo: 'CN007',
     cnDate: '2025-06-07',
     consignor: 'Secure Freight',
     consignee: 'Urban Clothing',
     from: 'Indore',
     to: 'Bhopal',
     paymentTerm: 'Credit',
     billingAmount: 13000,
     receivedAmount: 3000,
     dueAmount: 10000,
   },
   {
     slNo: 8,
     cnNo: 'CN008',
     cnDate: '2025-06-08',
     consignor: 'Rapid Cartage',
     consignee: 'Elite Tech',
     from: 'Surat',
     to: 'Rajkot',
     paymentTerm: 'Prepaid',
     billingAmount: 16000,
     receivedAmount: 16000,
     dueAmount: 0,
   },
   {
     slNo: 9,
     cnNo: 'CN009',
     cnDate: '2025-06-09',
     consignor: 'Nationwide Movers',
     consignee: 'Daily Supplies',
     from: 'Kochi',
     to: 'Trivandrum',
     paymentTerm: 'To Pay',
     billingAmount: 14000,
     receivedAmount: 14000,
     dueAmount: 0,
   },
   {
     slNo: 10,
     cnNo: 'CN010',
     cnDate: '2025-06-10',
     consignor: 'Cargo Hub',
     consignee: 'EcoMart',
     from: 'Patna',
     to: 'Ranchi',
     paymentTerm: 'Credit',
     billingAmount: 12500,
     receivedAmount: 7500,
     dueAmount: 5000,
   },
 ];



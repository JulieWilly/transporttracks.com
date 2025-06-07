import { Component } from '@angular/core';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { AddBtnComponent } from '../../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';

@Component({
  selector: 'app-manage-loading-slips',
  imports: [
    SharableTableComponent,
    QuickNavigationComponent,
    SharableTitleComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
  ],
  templateUrl: './manage-loading-slips.component.html',
  styleUrl: './manage-loading-slips.component.css',
})
export class ManageLoadingSlipsComponent {
  btnName: string = 'Add new';
  currentPage: string = 'Manage Loading Slips';
  dataSource = new MatTableDataSource(MANIFEST_DATA);
  placeholderText:string = 'Search by Vehicle No'

  // displayedColumns = ['id', 'name', 'email'];
  displayedColumns: string[] = [
    'slNo',
    'date',
    'loadingSlip',
    'billToParty',
    'shipToParty',
    'vehicleNo',
    'bag',
    'plant',
    'actions',
  ];
  value = '';

  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    date: 'Date',
    loadingSlip: 'Loading Slip',
    billToParty: 'Bill To Party',
    shipToParty: 'Ship To Party',
    vehicleNo: 'Vehicle No',
    bag: 'Bag',
    plant: 'Plant',
    actions: 'Actions',
  };

  addNewLoadSlip() {
    alert('This button will add a new load slip');
  }
}





export interface ManifestRecord {
  slNo: number;
  date: string;
  loadingSlip: string;
  billToParty: string;
  shipToParty: string;
  vehicleNo: string;
  bag: number;
  plant: string;
}

export const MANIFEST_DATA: ManifestRecord[] = [
  {
    slNo: 1,
    date: '2025-05-01',
    loadingSlip: 'LS-001',
    billToParty: 'ABC Traders',
    shipToParty: 'XYZ Distributors',
    vehicleNo: 'KA01AB1234',
    bag: 50,
    plant: 'Plant A',
  },
  {
    slNo: 2,
    date: '2025-05-02',
    loadingSlip: 'LS-002',
    billToParty: 'DEF Ltd.',
    shipToParty: 'LMN Corp',
    vehicleNo: 'MH12CD5678',
    bag: 75,
    plant: 'Plant B',
  },
  {
    slNo: 3,
    date: '2025-05-03',
    loadingSlip: 'LS-003',
    billToParty: 'GHI Group',
    shipToParty: 'OPQ Industries',
    vehicleNo: 'DL04EF9012',
    bag: 60,
    plant: 'Plant A',
  },
  {
    slNo: 4,
    date: '2025-05-04',
    loadingSlip: 'LS-004',
    billToParty: 'JKL Pvt. Ltd.',
    shipToParty: 'RST Corp.',
    vehicleNo: 'TN07GH3456',
    bag: 90,
    plant: 'Plant C',
  },
  {
    slNo: 5,
    date: '2025-05-05',
    loadingSlip: 'LS-005',
    billToParty: 'MNO Associates',
    shipToParty: 'UVW Co.',
    vehicleNo: 'AP03IJ7890',
    bag: 55,
    plant: 'Plant B',
  },
  {
    slNo: 6,
    date: '2025-05-06',
    loadingSlip: 'LS-006',
    billToParty: 'PQR Ltd.',
    shipToParty: 'XYZ Distributors',
    vehicleNo: 'KA01XY5678',
    bag: 100,
    plant: 'Plant A',
  },
  {
    slNo: 7,
    date: '2025-05-07',
    loadingSlip: 'LS-007',
    billToParty: 'STU Enterprises',
    shipToParty: 'LMN Corp',
    vehicleNo: 'MH12QR1234',
    bag: 45,
    plant: 'Plant C',
  },
  {
    slNo: 8,
    date: '2025-05-08',
    loadingSlip: 'LS-008',
    billToParty: 'VWX Co.',
    shipToParty: 'OPQ Industries',
    vehicleNo: 'DL04YZ5678',
    bag: 80,
    plant: 'Plant B',
  },
  {
    slNo: 9,
    date: '2025-05-09',
    loadingSlip: 'LS-009',
    billToParty: 'YZA Ltd.',
    shipToParty: 'RST Corp.',
    vehicleNo: 'TN07AB9012',
    bag: 65,
    plant: 'Plant A',
  },
  {
    slNo: 10,
    date: '2025-05-10',
    loadingSlip: 'LS-010',
    billToParty: 'BCD Traders',
    shipToParty: 'UVW Co.',
    vehicleNo: 'AP03CD3456',
    bag: 70,
    plant: 'Plant C',
  },
];

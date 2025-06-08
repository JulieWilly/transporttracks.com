import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { SearchBtnComponent } from '../../../ReuseableComponents/search-btn/search-btn.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-gatepass-register',
  imports: [
    QuickNavigationComponent,
    SharableSearchInputComponent,
    SharableTitleComponent,
    SharableTableComponent,
    SearchBtnComponent,
  ],
  templateUrl: './gatepass-register.component.html',
  styleUrl: './gatepass-register.component.css',
})
export class GatepassRegisterComponent {
  currentPage: string = 'Gatepass Register';
  placeholderText: string = 'GP No. / Consignee No / Mobile No';

  displayedColumns: string[] = [
    'id',
    'gpNo',
    'gpDate',
    'gpTime',
    'consigneeName',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    id: 'SL No',
    gpNo: 'G/P No',
    gpDate: 'G/P Date',
    gpTime: 'G/P Time',
    consigneeName: 'Consignee Name',
    actions: 'Action',
  };

  dataSource = new MatTableDataSource(gatePasses);
}

export interface GatePass {
  id: number;
  gpNo: string;
  gpDate: string;
  gpTime: string;
  consigneeName: string;
}


export const gatePasses: GatePass[] = [
  {
    id: 1,
    gpNo: 'GP1001',
    gpDate: '2025-06-01',
    gpTime: '08:45',
    consigneeName: 'ABC Logistics',
  },
  {
    id: 2,
    gpNo: 'GP1002',
    gpDate: '2025-06-01',
    gpTime: '09:15',
    consigneeName: 'Star Enterprises',
  },
  {
    id: 3,
    gpNo: 'GP1003',
    gpDate: '2025-06-01',
    gpTime: '10:00',
    consigneeName: 'Blue Whale Co.',
  },
  {
    id: 4,
    gpNo: 'GP1004',
    gpDate: '2025-06-01',
    gpTime: '10:45',
    consigneeName: 'Maxx Supplies',
  },
  {
    id: 5,
    gpNo: 'GP1005',
    gpDate: '2025-06-01',
    gpTime: '11:30',
    consigneeName: 'Bright Textiles',
  },
  {
    id: 6,
    gpNo: 'GP1006',
    gpDate: '2025-06-02',
    gpTime: '08:00',
    consigneeName: 'Neo Ventures',
  },
  {
    id: 7,
    gpNo: 'GP1007',
    gpDate: '2025-06-02',
    gpTime: '08:45',
    consigneeName: 'Crest Chemicals',
  },
  {
    id: 8,
    gpNo: 'GP1008',
    gpDate: '2025-06-02',
    gpTime: '09:20',
    consigneeName: 'NextGen Traders',
  },
  {
    id: 9,
    gpNo: 'GP1009',
    gpDate: '2025-06-02',
    gpTime: '10:05',
    consigneeName: 'Urban Hardware',
  },
  {
    id: 10,
    gpNo: 'GP1010',
    gpDate: '2025-06-02',
    gpTime: '10:55',
    consigneeName: 'Global Goods',
  },
];

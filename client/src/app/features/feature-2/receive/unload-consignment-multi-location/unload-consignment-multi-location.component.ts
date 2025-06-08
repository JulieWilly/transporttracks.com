import { Component } from '@angular/core';

import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-unload-consignment-multi-location',
  imports: [
    QuickNavigationComponent,
    SharableSearchInputComponent,
    SharableTitleComponent,
    SharableTableComponent,
  ],
  templateUrl: './unload-consignment-multi-location.component.html',
  styleUrl: './unload-consignment-multi-location.component.css',
})
export class UnloadConsignmentMultiLocationComponent {
  currentPage: string = 'Unload Consignment (Multi Location)';
  placeholderText: string = 'Manifest / Vehicle No.';

  displayedColumns: string[] = [
    'lNo',
    'mfNo',
    'mfDate',
    'vehicleNo',
    'dispatchDate',
    'from',
    'to',
    'status',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    lNo: 'L No',
    mfNo: 'MF/No',
    mfDate: 'MF Date',
    vehicleNo: 'Vehicle No',
    dispatchDate: 'Dispatch Date',
    from: 'From',
    to: 'To',
    status: 'Status',
    actions: 'Action',
  };

  dataSource = new MatTableDataSource(dispatchLogs);
}

export interface DispatchLog {
  lNo: number;
  mfNo: string;
  mfDate: string;
  vehicleNo: string;
  dispatchDate: string;
  from: string;
  to: string;
  status: string;
}


export const dispatchLogs: DispatchLog[] = [
  {
    lNo: 1,
    mfNo: 'MF1001',
    mfDate: '2025-06-01',
    vehicleNo: 'TN-10-AA-1234',
    dispatchDate: '2025-06-01',
    from: 'Plant A',
    to: 'Depot X',
    status: '',
  },
  {
    lNo: 2,
    mfNo: 'MF1002',
    mfDate: '2025-06-02',
    vehicleNo: 'TN-10-BB-2345',
    dispatchDate: '2025-06-02',
    from: 'Plant B',
    to: 'Depot Y',
    status: '',
  },
  {
    lNo: 3,
    mfNo: 'MF1003',
    mfDate: '2025-06-03',
    vehicleNo: 'TN-10-CC-3456',
    dispatchDate: '2025-06-03',
    from: 'Plant C',
    to: 'Depot Z',
    status: '',
  },
  {
    lNo: 4,
    mfNo: 'MF1004',
    mfDate: '2025-06-04',
    vehicleNo: 'TN-10-DD-4567',
    dispatchDate: '2025-06-04',
    from: 'Plant D',
    to: 'Depot Q',
    status: '',
  },
  {
    lNo: 5,
    mfNo: 'MF1005',
    mfDate: '2025-06-05',
    vehicleNo: 'TN-10-EE-5678',
    dispatchDate: '2025-06-05',
    from: 'Plant E',
    to: 'Depot R',
    status: '',
  },
  {
    lNo: 6,
    mfNo: 'MF1006',
    mfDate: '2025-06-06',
    vehicleNo: 'TN-10-FF-6789',
    dispatchDate: '2025-06-06',
    from: 'Plant F',
    to: 'Depot S',
    status: '',
  },
  {
    lNo: 7,
    mfNo: 'MF1007',
    mfDate: '2025-06-07',
    vehicleNo: 'TN-10-GG-7890',
    dispatchDate: '2025-06-07',
    from: 'Plant G',
    to: 'Depot T',
    status: '',
  },
  {
    lNo: 8,
    mfNo: 'MF1008',
    mfDate: '2025-06-08',
    vehicleNo: 'TN-10-HH-8901',
    dispatchDate: '2025-06-08',
    from: 'Plant H',
    to: 'Depot U',
    status: '',
  },
  {
    lNo: 9,
    mfNo: 'MF1009',
    mfDate: '2025-06-09',
    vehicleNo: 'TN-10-II-9012',
    dispatchDate: '2025-06-09',
    from: 'Plant I',
    to: 'Depot V',
    status: '',
  },
  {
    lNo: 10,
    mfNo: 'MF1010',
    mfDate: '2025-06-10',
    vehicleNo: 'TN-10-JJ-0123',
    dispatchDate: '2025-06-10',
    from: 'Plant J',
    to: 'Depot W',
    status: '',
  },
];




import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-unload-consignment',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './unload-consignment.component.html',
  styleUrl: './unload-consignment.component.css',
})
export class UnloadConsignmentComponent {
  currentPage: string = 'Unload Consignment';
  placeholderText: string = 'Manifest / Vehicle No.';

  dataSource = new MatTableDataSource(mfRecords);

  displayedColumns: string[] = [
    'slNo',
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
    slNo: 'SL No',
    mfNo: 'MF/No',
    mfDate: 'MF Date',
    vehicleNo: 'Vehicle No',
    dispatchDate: 'Dispatch Date',
    from: 'From',
    to: 'To',
    status: 'Status',
    actions: 'Action',
  };
}


export interface MFRecord {
  slNo: number;
  mfNo: string;
  mfDate: string;
  vehicleNo: string;
  dispatchDate: string;
  from: string;
  to: string;
  status: string;
}

export const mfRecords: MFRecord[] = [
  {
    slNo: 1,
    mfNo: 'MF001',
    mfDate: '2025-06-01',
    vehicleNo: 'KA-01-AB-1234',
    dispatchDate: '2025-06-01',
    from: 'Warehouse A',
    to: 'Depot X',
    status: '',
  },
  {
    slNo: 2,
    mfNo: 'MF002',
    mfDate: '2025-06-02',
    vehicleNo: 'KA-02-CD-5678',
    dispatchDate: '2025-06-02',
    from: 'Warehouse B',
    to: 'Depot Y',
    status: '',
  },
  {
    slNo: 3,
    mfNo: 'MF003',
    mfDate: '2025-06-03',
    vehicleNo: 'KA-03-EF-9012',
    dispatchDate: '2025-06-03',
    from: 'Warehouse C',
    to: 'Depot Z',
    status: '',
  },
  {
    slNo: 4,
    mfNo: 'MF004',
    mfDate: '2025-06-04',
    vehicleNo: 'KA-04-GH-3456',
    dispatchDate: '2025-06-04',
    from: 'Warehouse A',
    to: 'Depot Q',
    status: '',
  },
  {
    slNo: 5,
    mfNo: 'MF005',
    mfDate: '2025-06-05',
    vehicleNo: 'KA-05-IJ-7890',
    dispatchDate: '2025-06-05',
    from: 'Warehouse B',
    to: 'Depot R',
    status: '',
  },
  {
    slNo: 6,
    mfNo: 'MF006',
    mfDate: '2025-06-06',
    vehicleNo: 'KA-06-KL-2345',
    dispatchDate: '2025-06-06',
    from: 'Warehouse C',
    to: 'Depot S',
    status: '',
  },
  {
    slNo: 7,
    mfNo: 'MF007',
    mfDate: '2025-06-07',
    vehicleNo: 'KA-07-MN-6789',
    dispatchDate: '2025-06-07',
    from: 'Warehouse D',
    to: 'Depot T',
    status: '',
  },
  {
    slNo: 8,
    mfNo: 'MF008',
    mfDate: '2025-06-08',
    vehicleNo: 'KA-08-OP-0123',
    dispatchDate: '2025-06-08',
    from: 'Warehouse E',
    to: 'Depot U',
    status: '',
  },
  {
    slNo: 9,
    mfNo: 'MF009',
    mfDate: '2025-06-09',
    vehicleNo: 'KA-09-QR-4567',
    dispatchDate: '2025-06-09',
    from: 'Warehouse F',
    to: 'Depot V',
    status: '',
  },
  {
    slNo: 10,
    mfNo: 'MF010',
    mfDate: '2025-06-10',
    vehicleNo: 'KA-10-ST-8901',
    dispatchDate: '2025-06-10',
    from: 'Warehouse G',
    to: 'Depot W',
    status: '',
  },
];


import { Component } from '@angular/core';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manifest-register',
  imports: [
    SharableSearchInputComponent,
    QuickNavigationComponent,
    SharableTableComponent,
    SharableTitleComponent,
  ],
  templateUrl: './manifest-register.component.html',
  styleUrl: './manifest-register.component.css',
})
export class ManifestRegisterComponent {
  displayedColumns: string[] = [
    'slNo',
    'mfNo',
    'date',
    'from',
    'to',
    'vehicleNo',
    'status',
    'action',
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    mfNo: 'MF/No',
    date: 'Date',
    from: 'From',
    to: 'To',
    vehicleNo: 'Vehicle No',
    status: 'Status',
    action: 'Action',
  };

  dataSource = new MatTableDataSource(MANIFEST_DATA);
}

export interface ManifestRecord {
  slNo: number;
  mfNo: string;
  date: string;
  from: string;
  to: string;
  vehicleNo: string;
  status: string;
}


export const MANIFEST_DATA: ManifestRecord[] = [
  {
    slNo: 1,
    mfNo: 'MF001',
    date: '2025-06-01',
    from: 'Delhi',
    to: 'Mumbai',
    vehicleNo: 'DL01AB1234',
    status: 'In Transit',
  },
  {
    slNo: 2,
    mfNo: 'MF002',
    date: '2025-06-02',
    from: 'Mumbai',
    to: 'Chennai',
    vehicleNo: 'MH02CD5678',
    status: 'Delivered',
  },
  {
    slNo: 3,
    mfNo: 'MF003',
    date: '2025-06-03',
    from: 'Kolkata',
    to: 'Delhi',
    vehicleNo: 'WB03EF9012',
    status: 'Pending',
  },
  {
    slNo: 4,
    mfNo: 'MF004',
    date: '2025-06-04',
    from: 'Bangalore',
    to: 'Hyderabad',
    vehicleNo: 'KA04GH3456',
    status: 'In Transit',
  },
  {
    slNo: 5,
    mfNo: 'MF005',
    date: '2025-06-05',
    from: 'Pune',
    to: 'Ahmedabad',
    vehicleNo: 'MH05IJ7890',
    status: 'Delivered',
  },
  {
    slNo: 6,
    mfNo: 'MF006',
    date: '2025-06-06',
    from: 'Nagpur',
    to: 'Bhopal',
    vehicleNo: 'MH06KL1234',
    status: 'In Transit',
  },
  {
    slNo: 7,
    mfNo: 'MF007',
    date: '2025-06-07',
    from: 'Indore',
    to: 'Surat',
    vehicleNo: 'MP07MN5678',
    status: 'Pending',
  },
  {
    slNo: 8,
    mfNo: 'MF008',
    date: '2025-06-08',
    from: 'Ranchi',
    to: 'Patna',
    vehicleNo: 'JH08OP9012',
    status: 'Delivered',
  },
  {
    slNo: 9,
    mfNo: 'MF009',
    date: '2025-06-09',
    from: 'Lucknow',
    to: 'Kanpur',
    vehicleNo: 'UP09QR3456',
    status: 'In Transit',
  },
  {
    slNo: 10,
    mfNo: 'MF010',
    date: '2025-06-10',
    from: 'Jaipur',
    to: 'Udaipur',
    vehicleNo: 'RJ10ST7890',
    status: 'Delivered',
  },
];


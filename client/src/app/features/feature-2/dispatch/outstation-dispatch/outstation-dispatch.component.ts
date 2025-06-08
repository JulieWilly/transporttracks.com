import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';



@Component({
  selector: 'app-outstation-dispatch',
  imports: [
    QuickNavigationComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
    SharableTitleComponent
  ],
  templateUrl: './outstation-dispatch.component.html',
  styleUrl: './outstation-dispatch.component.css',
})
export class OutstationDispatchComponent {
  currentPage: string = 'Outstation';
  placeholderText: string = 'Manifest No.';

  displayedColumns: string[] = [
    'slNo',
    'mfNoDate',
    'dispatchDateTime',
    'from',
    'to',
    'vehicleNo',
    'status',
    'actions',
  ];

  columnHeaders: { [key: string]: string } = {
    slNo: 'SL No',
    mfNoDate: 'MF No/Date',
    dispatchDateTime: 'Dispatch Date/Time',
    from: 'From',
    to: 'To',
    vehicleNo: 'Vehicle No',
    status: 'Status',
    actions: 'Edit',
  };

  dataSource = new MatTableDataSource(mfDispatchData);
}

export interface MFDispatch {
  slNo: number;
  mfNoDate: string;
  dispatchDateTime: string;
  from: string;
  to: string;
  vehicleNo: string;
  status: string;
  edit?: boolean;
}

export const mfDispatchData: MFDispatch[] = [
  {
    slNo: 1,
    mfNoDate: 'MF001 / 2025-06-01',
    dispatchDateTime: '2025-06-01 08:30 AM',
    from: 'Hub A',
    to: 'Depot B',
    vehicleNo: 'KA-01-AB-1234',
    status: '',
  },
  {
    slNo: 2,
    mfNoDate: 'MF002 / 2025-06-02',
    dispatchDateTime: '2025-06-02 09:00 AM',
    from: 'Hub B',
    to: 'Depot C',
    vehicleNo: 'KA-02-CD-5678',
    status: '',
  },
  {
    slNo: 3,
    mfNoDate: 'MF003 / 2025-06-03',
    dispatchDateTime: '2025-06-03 10:15 AM',
    from: 'Hub C',
    to: 'Depot D',
    vehicleNo: 'KA-03-EF-9012',
    status: '',
  },
  {
    slNo: 4,
    mfNoDate: 'MF004 / 2025-06-04',
    dispatchDateTime: '2025-06-04 11:00 AM',
    from: 'Hub A',
    to: 'Depot E',
    vehicleNo: 'KA-04-GH-3456',
    status: '',
  },
  {
    slNo: 5,
    mfNoDate: 'MF005 / 2025-06-05',
    dispatchDateTime: '2025-06-05 12:00 PM',
    from: 'Hub D',
    to: 'Depot F',
    vehicleNo: 'KA-05-IJ-7890',
    status: '',
  },
  {
    slNo: 6,
    mfNoDate: 'MF006 / 2025-06-06',
    dispatchDateTime: '2025-06-06 01:30 PM',
    from: 'Hub E',
    to: 'Depot G',
    vehicleNo: 'KA-06-KL-2345',
    status: '',
  },
  {
    slNo: 7,
    mfNoDate: 'MF007 / 2025-06-07',
    dispatchDateTime: '2025-06-07 02:00 PM',
    from: 'Hub F',
    to: 'Depot H',
    vehicleNo: 'KA-07-MN-6789',
    status: '',
  },
  {
    slNo: 8,
    mfNoDate: 'MF008 / 2025-06-08',
    dispatchDateTime: '2025-06-08 03:45 PM',
    from: 'Hub G',
    to: 'Depot I',
    vehicleNo: 'KA-08-OP-0123',
    status: '',
  },
  {
    slNo: 9,
    mfNoDate: 'MF009 / 2025-06-09',
    dispatchDateTime: '2025-06-09 04:00 PM',
    from: 'Hub H',
    to: 'Depot J',
    vehicleNo: 'KA-09-QR-4567',
    status: '',
  },
  {
    slNo: 10,
    mfNoDate: 'MF010 / 2025-06-10',
    dispatchDateTime: '2025-06-10 05:15 PM',
    from: 'Hub I',
    to: 'Depot K',
    vehicleNo: 'KA-10-ST-8901',
    status: '',
  },
];


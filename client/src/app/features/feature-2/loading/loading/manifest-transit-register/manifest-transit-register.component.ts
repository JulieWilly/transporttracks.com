import { Component, Input } from '@angular/core';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { MatTableDataSource } from '@angular/material/table';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { BackComponent } from '../../../../ReuseableComponents/back/back.component';

@Component({
  selector: 'app-manifest-transit-register',
  imports: [
    SharableTableComponent,
    QuickNavigationComponent,
    SharableTitleComponent,
    SharableSearchInputComponent,
    BackComponent,
  ],
  templateUrl: './manifest-transit-register.component.html',
  styleUrl: './manifest-transit-register.component.css',
})
export class ManifestTransitRegisterComponent {
  placeholderText: string = 'Manifext No / Vehicle No';

  displayedColumns: string[] = [
    'slNo',
    'mfNo',
    'date',
    'from',
    'to',
    'vehicleNo',
    'driverNo',
    'currentLocation',
    'updateLocation',
    'viewLocations',
  ];

  columnHeaders: Record<string, string> = {
    slNo: 'SL No',
    mfNo: 'MF/No',
    date: 'Date',
    from: 'From',
    to: 'To',
    vehicleNo: 'Vehicle No',
    driverNo: 'Driver No',
    currentLocation: 'Current Location',
    updateLocation: 'Update Location',
    viewLocations: 'View Locations',
  };

  dataSource = new MatTableDataSource(mfRecords);
}


export interface MfRecord {
  slNo: number;
  mfNo: string;
  date: string;
  from: string;
  to: string;
  vehicleNo: string;
  driverNo: string;
  currentLocation: string;
  updateLocation: string;
  viewLocations: string;
}

export const mfRecords: MfRecord[] = [
  {
    slNo: 1,
    mfNo: 'MF001',
    date: '2025-06-01',
    from: 'Delhi',
    to: 'Mumbai',
    vehicleNo: 'DL1AB1234',
    driverNo: '9999990001',
    currentLocation: 'Indore',
    updateLocation: 'Update',
    viewLocations: 'View',
  },
  {
    slNo: 2,
    mfNo: 'MF002',
    date: '2025-06-01',
    from: 'Chennai',
    to: 'Bangalore',
    vehicleNo: 'TN10CD4567',
    driverNo: '9999990002',
    currentLocation: 'Vellore',
    updateLocation: 'Update',
    viewLocations: 'View',
  },
  {
    slNo: 3,
    mfNo: 'MF003',
    date: '2025-06-02',
    from: 'Pune',
    to: 'Hyderabad',
    vehicleNo: 'MH12EF7890',
    driverNo: '9999990003',
    currentLocation: 'Solapur',
    updateLocation: 'Update',
    viewLocations: 'View',
  },
  {
    slNo: 4,
    mfNo: 'MF004',
    date: '2025-06-02',
    from: 'Ahmedabad',
    to: 'Surat',
    vehicleNo: 'GJ01GH1234',
    driverNo: '9999990004',
    currentLocation: 'Baroda',
    updateLocation: 'Update',
    viewLocations: 'View',
  },
  {
    slNo: 5,
    mfNo: 'MF005',
    date: '2025-06-03',
    from: 'Lucknow',
    to: 'Kanpur',
    vehicleNo: 'UP32IJ5678',
    driverNo: '9999990005',
    currentLocation: 'Unnao',
    updateLocation: 'Update',
    viewLocations: 'View',
  },
  {
    slNo: 6,
    mfNo: 'MF006',
    date: '2025-06-03',
    from: 'Bhopal',
    to: 'Nagpur',
    vehicleNo: 'MP04KL9012',
    driverNo: '9999990006',
    currentLocation: 'Betul',
    updateLocation: 'Update',
    viewLocations: 'View',
  },
  {
    slNo: 7,
    mfNo: 'MF007',
    date: '2025-06-04',
    from: 'Kolkata',
    to: 'Durgapur',
    vehicleNo: 'WB20MN3456',
    driverNo: '9999990007',
    currentLocation: 'Bardhaman',
    updateLocation: 'Update',
    viewLocations: 'View',
  },
  {
    slNo: 8,
    mfNo: 'MF008',
    date: '2025-06-04',
    from: 'Jaipur',
    to: 'Udaipur',
    vehicleNo: 'RJ14OP7890',
    driverNo: '9999990008',
    currentLocation: 'Ajmer',
    updateLocation: 'Update',
    viewLocations: 'View',
  },
  {
    slNo: 9,
    mfNo: 'MF009',
    date: '2025-06-05',
    from: 'Patna',
    to: 'Gaya',
    vehicleNo: 'BR01QR1234',
    driverNo: '9999990009',
    currentLocation: 'Jehanabad',
    updateLocation: 'Update',
    viewLocations: 'View',
  },
  {
    slNo: 10,
    mfNo: 'MF010',
    date: '2025-06-05',
    from: 'Trivandrum',
    to: 'Kochi',
    vehicleNo: 'KL01ST5678',
    driverNo: '9999990010',
    currentLocation: 'Alleppey',
    updateLocation: 'Update',
    viewLocations: 'View',
  },
];

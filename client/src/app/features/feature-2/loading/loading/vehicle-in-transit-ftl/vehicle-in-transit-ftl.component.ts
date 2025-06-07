import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { BackComponent } from '../../../../ReuseableComponents/back/back.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-vehicle-in-transit-ftl',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    BackComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './vehicle-in-transit-ftl.component.html',
  styleUrl: './vehicle-in-transit-ftl.component.css',
})
export class VehicleInTransitFtlComponent {
  currentPage: string = 'Manage Ftl Vehilce In Transit';
  placeholderText: string = 'CN / Vehicle No.';

  dataSource = new MatTableDataSource(CONSIGNMENT_LOCATIONS);
  displayedColumns: string[] = [
    'id',
    'cnNo',
    'vehicleNo',
    'driverNo',
    'from',
    'to',
    'currentLocation',
    'updateLocation',
    'viewLocation',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    id: '#',
    cnNo: 'CN No',
    vehicleNo: 'Vehicle No',
    driverNo: 'Driver No',
    from: 'From',
    to: 'To',
    currentLocation: 'Current Location',
    updateLocation: 'Update Location',
    viewLocation: 'View Location',
    action: 'Action',
  };
}


export interface ConsignmentLocation {
  id: number;
  cnNo: string;
  vehicleNo: string;
  driverNo: string;
  from: string;
  to: string;
  currentLocation: string;
}


export const CONSIGNMENT_LOCATIONS: ConsignmentLocation[] = [
  {
    id: 1,
    cnNo: 'CN1001',
    vehicleNo: 'KA01AB1234',
    driverNo: 'DRV001',
    from: 'Bangalore',
    to: 'Hyderabad',
    currentLocation: 'Kurnool',
  },
  {
    id: 2,
    cnNo: 'CN1002',
    vehicleNo: 'MH12XY4321',
    driverNo: 'DRV002',
    from: 'Mumbai',
    to: 'Pune',
    currentLocation: 'Lonavala',
  },
  {
    id: 3,
    cnNo: 'CN1003',
    vehicleNo: 'DL04MN8765',
    driverNo: 'DRV003',
    from: 'Delhi',
    to: 'Jaipur',
    currentLocation: 'Gurgaon',
  },
  {
    id: 4,
    cnNo: 'CN1004',
    vehicleNo: 'TN09KL9988',
    driverNo: 'DRV004',
    from: 'Chennai',
    to: 'Coimbatore',
    currentLocation: 'Vellore',
  },
  {
    id: 5,
    cnNo: 'CN1005',
    vehicleNo: 'AP31BZ4444',
    driverNo: 'DRV005',
    from: 'Vijayawada',
    to: 'Vizag',
    currentLocation: 'Rajahmundry',
  },
  {
    id: 6,
    cnNo: 'CN1006',
    vehicleNo: 'GJ01LM3210',
    driverNo: 'DRV006',
    from: 'Ahmedabad',
    to: 'Surat',
    currentLocation: 'Baroda',
  },
  {
    id: 7,
    cnNo: 'CN1007',
    vehicleNo: 'RJ45AA2233',
    driverNo: 'DRV007',
    from: 'Jaipur',
    to: 'Udaipur',
    currentLocation: 'Ajmer',
  },
  {
    id: 8,
    cnNo: 'CN1008',
    vehicleNo: 'WB32TZ1001',
    driverNo: 'DRV008',
    from: 'Kolkata',
    to: 'Siliguri',
    currentLocation: 'Malda',
  },
  {
    id: 9,
    cnNo: 'CN1009',
    vehicleNo: 'HR26UX8888',
    driverNo: 'DRV009',
    from: 'Gurgaon',
    to: 'Panipat',
    currentLocation: 'Sonipat',
  },
  {
    id: 10,
    cnNo: 'CN1010',
    vehicleNo: 'CH01GH5555',
    driverNo: 'DRV010',
    from: 'Chandigarh',
    to: 'Ludhiana',
    currentLocation: 'Mohali',
  },
];

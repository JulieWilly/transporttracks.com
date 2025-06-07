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
    actions: 'Deliver',
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
  updateLocation: string;
  viewLocation: string;
}



export const CONSIGNMENT_LOCATIONS: ConsignmentLocation[] = [
  {
    id: 1,
    cnNo: 'CN001',
    vehicleNo: 'KA01AB1234',
    driverNo: 'DRV001',
    from: 'Bangalore',
    to: 'Hyderabad',
    currentLocation: 'Kurnool',
    updateLocation: 'Anantapur',
    viewLocation: 'Kurnool Depot',
  },
  {
    id: 2,
    cnNo: 'CN002',
    vehicleNo: 'MH12XY4321',
    driverNo: 'DRV002',
    from: 'Mumbai',
    to: 'Pune',
    currentLocation: 'Lonavala',
    updateLocation: 'Khandala',
    viewLocation: 'Lonavala Checkpoint',
  },
  {
    id: 3,
    cnNo: 'CN003',
    vehicleNo: 'DL04MN8765',
    driverNo: 'DRV003',
    from: 'Delhi',
    to: 'Jaipur',
    currentLocation: 'Gurgaon',
    updateLocation: 'Rewari',
    viewLocation: 'Gurgaon Office',
  },
  {
    id: 4,
    cnNo: 'CN004',
    vehicleNo: 'TN09KL9988',
    driverNo: 'DRV004',
    from: 'Chennai',
    to: 'Coimbatore',
    currentLocation: 'Vellore',
    updateLocation: 'Salem',
    viewLocation: 'Vellore Terminal',
  },
  {
    id: 5,
    cnNo: 'CN005',
    vehicleNo: 'AP31BZ4444',
    driverNo: 'DRV005',
    from: 'Vijayawada',
    to: 'Vizag',
    currentLocation: 'Rajahmundry',
    updateLocation: 'Eluru',
    viewLocation: 'Rajahmundry Hub',
  },
  {
    id: 6,
    cnNo: 'CN006',
    vehicleNo: 'GJ01LM3210',
    driverNo: 'DRV006',
    from: 'Ahmedabad',
    to: 'Surat',
    currentLocation: 'Vadodara',
    updateLocation: 'Anand',
    viewLocation: 'Vadodara Station',
  },
  {
    id: 7,
    cnNo: 'CN007',
    vehicleNo: 'RJ45AA2233',
    driverNo: 'DRV007',
    from: 'Jaipur',
    to: 'Udaipur',
    currentLocation: 'Ajmer',
    updateLocation: 'Bhilwara',
    viewLocation: 'Ajmer Point',
  },
  {
    id: 8,
    cnNo: 'CN008',
    vehicleNo: 'WB32TZ1001',
    driverNo: 'DRV008',
    from: 'Kolkata',
    to: 'Siliguri',
    currentLocation: 'Malda',
    updateLocation: 'Raiganj',
    viewLocation: 'Malda Yard',
  },
  {
    id: 9,
    cnNo: 'CN009',
    vehicleNo: 'HR26UX7788',
    driverNo: 'DRV009',
    from: 'Gurgaon',
    to: 'Ambala',
    currentLocation: 'Panipat',
    updateLocation: 'Karnal',
    viewLocation: 'Panipat Zone',
  },
  {
    id: 10,
    cnNo: 'CN010',
    vehicleNo: 'MP09XZ6677',
    driverNo: 'DRV010',
    from: 'Indore',
    to: 'Bhopal',
    currentLocation: 'Sehore',
    updateLocation: 'Dewas',
    viewLocation: 'Sehore Parking',
  },
];


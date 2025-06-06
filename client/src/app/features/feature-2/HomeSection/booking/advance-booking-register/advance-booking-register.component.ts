import { AfterViewInit, Component, NgModule, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
interface Consignment {
  id: number;
  issueDate: string;
  cnNo: string;
  consignor: string;
  consignee: string;
  biltyType: string;
  status: string;
  transport: string;
}

@Component({
  selector: 'app-advance-booking-register',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    FormsModule,
    MatIconModule,
    QuickNavigationComponent,
    SharableTableComponent,
    SharableTitleComponent,
    SharableSearchInputComponent,
  ],
  templateUrl: './advance-booking-register.component.html',
  styleUrl: './advance-booking-register.component.css',
})
export class AdvanceBookingRegisterComponent implements AfterViewInit {
  // displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  displayedColumns: string[] = [
    'id',
    'issueDate',
    'cnNo',
    'consignor',
    'consignee',
    'biltyType',
    'status',
    'transport',
    'actions',
  ];

  columnHeaders: Record<string, string> = {
    id: '#',
    issueDate: 'Issue Date',
    cnNo: 'CN No.',
    consignor: 'Consignor',
    consignee: 'Consignee',
    biltyType: 'Bilty Type',
    status: 'Status',
    transport: 'Transport',
    actions: 'Actions',
  };

  consignmentData: Consignment[] = [
    {
      id: 1,
      issueDate: '2025-05-01',
      cnNo: 'CN123456',
      consignor: 'ABC Pvt Ltd',
      consignee: 'XYZ Enterprises',
      biltyType: 'Regular',
      status: 'Delivered',
      transport: 'DHL',
    },
    {
      id: 2,
      issueDate: '2025-05-03',
      cnNo: 'CN123457',
      consignor: 'MNO Logistics',
      consignee: 'PQR Stores',
      biltyType: 'Express',
      status: 'In Transit',
      transport: 'FedEx',
    },
    {
      id: 3,
      issueDate: '2025-05-05',
      cnNo: 'CN123458',
      consignor: 'Global Traders',
      consignee: 'Sunrise Co.',
      biltyType: 'Regular',
      status: 'Pending',
      transport: 'Blue Dart',
    },
  ];

  dataSource: MatTableDataSource<Consignment>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.consignmentData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

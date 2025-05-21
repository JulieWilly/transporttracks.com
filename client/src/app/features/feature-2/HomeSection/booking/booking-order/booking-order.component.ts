import { AfterViewInit, Component, NgModule, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



interface Order {
  id: number;
  orderDate: string;
  consignor: string;
  total: number;
  pending: number;
  generated: boolean;
}

@Component({
  selector: 'app-booking-order',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './booking-order.component.html',
  styleUrl: './booking-order.component.css',
})
export class BookingOrderComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'orderDate',
    'consignor',
    'total',
    'pending',
    'generated',
    'actions'
  ];

  ORDERS_DATA: Order[] = [
    {
      id: 1,
      orderDate: '2025-05-01',
      consignor: 'Alpha Traders',
      total: 5000,
      pending: 1500,
      generated: true,
    },
    {
      id: 2,
      orderDate: '2025-05-02',
      consignor: 'Beta Logistics',
      total: 7200,
      pending: 0,
      generated: true,
    },
    {
      id: 3,
      orderDate: '2025-05-03',
      consignor: 'Gamma Exports',
      total: 3800,
      pending: 1000,
      generated: false,
    },
    {
      id: 4,
      orderDate: '2025-05-04',
      consignor: 'Delta Freight',
      total: 6400,
      pending: 200,
      generated: true,
    },
    {
      id: 5,
      orderDate: '2025-05-05',
      consignor: 'Echo Movers',
      total: 2500,
      pending: 2500,
      generated: false,
    },
    {
      id: 6,
      orderDate: '2025-05-06',
      consignor: 'Foxtrot Traders',
      total: 10000,
      pending: 500,
      generated: true,
    },
    {
      id: 7,
      orderDate: '2025-05-07',
      consignor: 'Golf Distributors',
      total: 4700,
      pending: 4700,
      generated: false,
    },
    {
      id: 8,
      orderDate: '2025-05-08',
      consignor: 'Hotel Cargo',
      total: 3200,
      pending: 0,
      generated: true,
    },
    {
      id: 9,
      orderDate: '2025-05-09',
      consignor: 'India Logistics',
      total: 8100,
      pending: 300,
      generated: true,
    },
    {
      id: 10,
      orderDate: '2025-05-10',
      consignor: 'Juliet Shipping',
      total: 2900,
      pending: 1000,
      generated: false,
    },
  ];

  dataSource: MatTableDataSource<Order>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.ORDERS_DATA);
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

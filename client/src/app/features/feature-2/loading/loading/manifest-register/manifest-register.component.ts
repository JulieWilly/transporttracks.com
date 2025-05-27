import { MatIconModule } from '@angular/material/icon';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

export interface ManifestRecord {
  snNo: number;
  manifestNo: string;
  date: string;
  from: string;
  to: string;
  vehicleNo: string;
  status: string;
}

@Component({
  selector: 'app-manifest-register',
  imports: [
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatPaginatorModule,
    MatButtonToggleModule,
  ],
  templateUrl: './manifest-register.component.html',
  styleUrl: './manifest-register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManifestRegisterComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'snNo',
    'manifestNo',
    'date',
    'from',
    'to',
    'vehicleNo',
    'status',
    'actions',
  ];
  dataSource: MatTableDataSource<ManifestRecord>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(manifestData);
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

const manifestData: ManifestRecord[] = [
  {
    snNo: 1,
    manifestNo: 'ASC00025',
    date: '20-05-2025',
    from: 'BOOKING',
    to: 'DELIVERY',
    vehicleNo: 'TR02 5112',
    status: 'New Menifest',
  },
  {
    snNo: 2,
    manifestNo: 'ASC00024',
    date: '20-05-2025',
    from: 'BOOKING',
    to: 'DELIVERY',
    vehicleNo: 'TR02 5112',
    status: 'New Menifest',
  },
  {
    snNo: 3,
    manifestNo: 'ASC00023 (770238)',
    date: '20-05-2025',
    from: 'BOOKING',
    to: 'DELIVERY',
    vehicleNo: 'TR02 5112',
    status: 'New Menifest',
  },
  {
    snNo: 4,
    manifestNo: 'ASC00022',
    date: '19-05-2025',
    from: 'BOOKING',
    to: 'DELIVERY',
    vehicleNo: 'TR02 5112',
    status: 'In Transit',
  },
  {
    snNo: 5,
    manifestNo: 'ASC00021',
    date: '17-05-2025',
    from: 'BOOKING',
    to: 'DELIVERY',
    vehicleNo: 'TR02 5112',
    status: 'At Destination',
  },
  {
    snNo: 6,
    manifestNo: 'ASC00020',
    date: '17-05-2025',
    from: 'BOOKING',
    to: 'DELIVERY',
    vehicleNo: 'TR02 5112',
    status: 'At Destination',
  },
  {
    snNo: 7,
    manifestNo: 'ASC00019',
    date: '16-05-2025',
    from: 'BOOKING',
    to: 'DELIVERY',
    vehicleNo: 'TR02 5112',
    status: 'In Transit',
  },
  {
    snNo: 8,
    manifestNo: 'ASC00018',
    date: '15-05-2025',
    from: 'BOOKING',
    to: 'DELIVERY',
    vehicleNo: 'TR02 5112',
    status: 'At Destination',
  },
  {
    snNo: 9,
    manifestNo: 'ASC00017',
    date: '14-05-2025',
    from: 'BOOKING',
    to: 'DELIVERY',
    vehicleNo: 'TR02 5112',
    status: 'At Destination',
  },
  {
    snNo: 10,
    manifestNo: 'ASC00016',
    date: '12-05-2025',
    from: 'BOOKING',
    to: 'DELIVERY',
    vehicleNo: 'TR02 5112',
    status: 'In Transit',
  },
];

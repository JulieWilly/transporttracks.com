import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { dataset } from '../../../../../data/bkRegister';
import { ConsignmentRecord } from '../../../../../Inrterfaces/bkRegisterInt';
@Component({
  standalone: true,
  selector: 'app-booking-register',
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './booking-register.component.html',
  styleUrl: './booking-register.component.css',
})
export class BookingRegisterComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'cnNo',
    'consignor',
    'consignee',
    'fromViaTo',
    'pay',
    'amount',
    'rec',
    'dis',
    'due',
    'location',
    'invNoDt',
    'status',
    'print',
    'collect',
  ];
  dataSource = new MatTableDataSource<ConsignmentRecord>(dataset);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

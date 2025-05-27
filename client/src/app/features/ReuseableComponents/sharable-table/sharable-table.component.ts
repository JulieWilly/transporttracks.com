import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sharable-table',
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
    CommonModule
  ],
  templateUrl: './sharable-table.component.html',
  styleUrl: './sharable-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharableTableComponent implements AfterViewInit {
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() displayedColumns: string[] =[];


  // displayedColumns: string[] = [
  //   'position',
  //   'name',
  //   'weight',
  //   'symbol',
  //   'sympton',
  //   'sweet',
  // ];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  value = 'Clear me';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}



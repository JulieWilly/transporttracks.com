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
import { MatRippleModule } from '@angular/material/core';

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
    CommonModule,
    MatRippleModule,
  ],
  templateUrl: './sharable-table.component.html',
  styleUrl: './sharable-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharableTableComponent implements AfterViewInit {
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() displayedColumns: string[] = [];
  @Input() showEdit = false;
  @Input() showDelete = false;
  @Input() showPrint = false;
  @Input() showView = false;
  @Input() columnHeaders!: any;
  @Input() showLinked = false;

  value = 'Clear me';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  edit() {
    // console.log('Edit:', element);
  }

  print() {
    // console.log('Print:', element);
  }

  delete() {
    // console.log('Delete:', element);
  }

  openDetails() {
    // console.log('any', element);
  }
  openLinkedDetails(){
    
  }
}



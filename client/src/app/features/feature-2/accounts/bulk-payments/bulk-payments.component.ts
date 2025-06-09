import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';

@Component({
  selector: 'app-bulk-payments',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    AddBtnComponent,
    SharableSearchInputComponent,
    SharableTableComponent
  ],
  templateUrl: './bulk-payments.component.html',
  styleUrl: './bulk-payments.component.css',
})
export class BulkPaymentsComponent {
  currentPage: string = 'Manage Bulk Payments';
  btnName: string = 'Add New';
  placeholderText:string = 'Search Here...';
}

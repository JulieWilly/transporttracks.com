import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { BackComponent } from '../../../ReuseableComponents/back/back.component';
import { DropdownBtnComponent } from '../../../ReuseableComponents/dropdown-btn/dropdown-btn.component';
import { DateFromComponent } from '../../../ReuseableComponents/date-from/date-from.component';
import { DateToComponent } from '../../../ReuseableComponents/date-to/date-to.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';

@Component({
  selector: 'app-bulk-invoice-print',
  imports: [
    QuickNavigationComponent,
    BackComponent,
    DropdownBtnComponent,
    BackComponent,
    DateFromComponent,
    DateToComponent,
    SharableSearchInputComponent,
    SharableTitleComponent
  ],
  templateUrl: './bulk-invoice-print.component.html',
  styleUrl: './bulk-invoice-print.component.css',
})
export class BulkInvoicePrintComponent {
  currentPage: string = 'Bulk Invoice Print';
  placeholderText:string = 'Search here'
}

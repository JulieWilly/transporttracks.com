import { Component } from '@angular/core';

import { DateFromComponent } from '../../../../ReuseableComponents/date-from/date-from.component';
import { DateToComponent } from '../../../../ReuseableComponents/date-to/date-to.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SearchByComponent } from '../../../../ReuseableComponents/search-by/search-by.component';

@Component({
  selector: 'app-bulk-booking-print-aayush',
  imports: [
    DateFromComponent,
    DateToComponent,
    SharableSearchInputComponent,
    SharableTitleComponent,
    QuickNavigationComponent,
    SearchByComponent,
  ],
  templateUrl: './bulk-booking-print-aayush.component.html',
  styleUrl: './bulk-booking-print-aayush.component.css',
})
export class BulkBookingPrintAayushComponent {
  value = 'Clear me';
}

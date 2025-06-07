import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
import { DateToComponent } from '../../../../ReuseableComponents/date-to/date-to.component';
import { DateFromComponent } from '../../../../ReuseableComponents/date-from/date-from.component';
import { SearchByComponent } from '../../../../ReuseableComponents/search-by/search-by.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';


@Component({
  selector: 'app-bulk-booking-print-lokenath-express',
  imports: [
    DateFromComponent, DateToComponent, QuickNavigationComponent, SharableSearchInputComponent, SearchByComponent,SharableTitleComponent

  ],
  templateUrl: './bulk-booking-print-lokenath-express.component.html',
  styleUrl: './bulk-booking-print-lokenath-express.component.css',
})
export class BulkBookingPrintLokenathExpressComponent {
  value = 'Clear me';
}

import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DateFromComponent } from '../../../../ReuseableComponents/date-from/date-from.component';
import { DateToComponent } from '../../../../ReuseableComponents/date-to/date-to.component';
import { SearchByComponent } from '../../../../ReuseableComponents/search-by/search-by.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';
@Component({
  selector: 'app-bulk-booking-print-mahagoenkar',
  imports: [
DateFromComponent,
DateToComponent,
SearchByComponent,
SharableSearchInputComponent,
QuickNavigationComponent,
SharableTitleComponent
  ],
  templateUrl: './bulk-booking-print-mahagoenkar.component.html',
  styleUrl: './bulk-booking-print-mahagoenkar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulkBookingPrintMahagoenkarComponent {
  value = 'Clear me';
}

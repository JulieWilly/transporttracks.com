import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { DateFromComponent } from '../../../../ReuseableComponents/date-from/date-from.component';
import { DateToComponent } from '../../../../ReuseableComponents/date-to/date-to.component';
import { SearchByComponent } from '../../../../ReuseableComponents/search-by/search-by.component';
import { SharableSearchInputComponent } from '../../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { QuickNavigationComponent } from '../../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../../ReuseableComponents/sharable-title/sharable-title.component';

@Component({
  selector: 'app-date-wise-bulk-booking-print',
  imports: [
    DateFromComponent,
    DateToComponent,
    SearchByComponent,
    SharableSearchInputComponent,
    QuickNavigationComponent,
    SharableTitleComponent,
  ],
  templateUrl: './date-wise-bulk-booking-print.component.html',
  styleUrl: './date-wise-bulk-booking-print.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
})
export class DateWiseBulkBookingPrintComponent {
  value = 'Clear me';
}

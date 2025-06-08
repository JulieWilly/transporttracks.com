import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { DateFromComponent } from '../../../ReuseableComponents/date-from/date-from.component';
import { DateToComponent } from '../../../ReuseableComponents/date-to/date-to.component';
import { SearchByComponent } from '../../../ReuseableComponents/search-by/search-by.component';
import { BackComponent } from '../../../ReuseableComponents/back/back.component';
import { DropdownBtnComponent } from '../../../ReuseableComponents/dropdown-btn/dropdown-btn.component';

@Component({
  selector: 'app-dispatch-register-report',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    DateFromComponent,
    DateToComponent,
    SearchByComponent,
    BackComponent,
    DropdownBtnComponent
  ],
  templateUrl: './dispatch-register-report.component.html',
  styleUrl: './dispatch-register-report.component.css',
})
export class DispatchRegisterReportComponent {
  currentPage: string = 'Despatch Register Report';
}

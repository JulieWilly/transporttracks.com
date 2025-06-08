import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { DropdownBtnComponent } from '../../../ReuseableComponents/dropdown-btn/dropdown-btn.component';
import { BackComponent } from '../../../ReuseableComponents/back/back.component';
import { DateFromComponent } from '../../../ReuseableComponents/date-from/date-from.component';
import { DateToComponent } from '../../../ReuseableComponents/date-to/date-to.component';
import { SearchByComponent } from '../../../ReuseableComponents/search-by/search-by.component';
import { SearchBtnComponent } from '../../../ReuseableComponents/search-btn/search-btn.component';

@Component({
  selector: 'app-lr-consignment-incoming-register',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    DropdownBtnComponent,
    BackComponent,
    DateToComponent,
    DateFromComponent,
    SearchByComponent,
    SearchBtnComponent,
  ],
  templateUrl: './lr-consignment-incoming-register.component.html',
  styleUrl: './lr-consignment-incoming-register.component.css',
})
export class LrConsignmentIncomingRegisterComponent {
  currentPage: string = 'Lr Consignment Incoming Register';
}

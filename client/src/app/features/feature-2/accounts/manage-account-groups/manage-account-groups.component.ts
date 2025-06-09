import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { AddBtnComponent } from '../../../ReuseableComponents/add-btn/add-btn.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manage-account-groups',
  imports: [
    QuickNavigationComponent,
    AddBtnComponent,
    SharableTitleComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './manage-account-groups.component.html',
  styleUrl: './manage-account-groups.component.css',
})
export class ManageAccountGroupsComponent {
  currentPage: string = 'Account Group Register';
  btnName: string = 'Add New Account Group';
  placeholderText: string = 'Account Group Name';
  dataSource = new MatTableDataSource(accountGroups);

  displayedColumns: string[] = [
    'sl',
    'accountGroupName',
    'accountPrimaryGroup',
    'underGroup',
    'active',
  ];

  columnHeaders: Record<string, string> = {
    sl: 'Sl.',
    accountGroupName: 'Account Group Name',
    accountPrimaryGroup: 'Account Primary Group',
    underGroup: 'Under Group',
    active: 'Active',
  };
}

interface AccountGroup {
  sl: number;
  accountGroupName: string;
  accountPrimaryGroup: string;
  underGroup: string;
  active: boolean;
}


const accountGroups: AccountGroup[] = [
  {
    sl: 1,
    accountGroupName: 'Assets',
    accountPrimaryGroup: 'Primary',
    underGroup: 'None',
    active: true,
  },
  {
    sl: 2,
    accountGroupName: 'Liabilities',
    accountPrimaryGroup: 'Primary',
    underGroup: 'None',
    active: true,
  },
  {
    sl: 3,
    accountGroupName: 'Equity',
    accountPrimaryGroup: 'Primary',
    underGroup: 'None',
    active: true,
  },
  {
    sl: 4,
    accountGroupName: 'Revenue',
    accountPrimaryGroup: 'Primary',
    underGroup: 'None',
    active: true,
  },
  {
    sl: 5,
    accountGroupName: 'Expenses',
    accountPrimaryGroup: 'Primary',
    underGroup: 'None',
    active: true,
  },
  {
    sl: 6,
    accountGroupName: 'Current Assets',
    accountPrimaryGroup: 'Assets',
    underGroup: 'Assets',
    active: true,
  },
  {
    sl: 7,
    accountGroupName: 'Current Liabilities',
    accountPrimaryGroup: 'Liabilities',
    underGroup: 'Liabilities',
    active: true,
  },
  {
    sl: 8,
    accountGroupName: 'Fixed Assets',
    accountPrimaryGroup: 'Assets',
    underGroup: 'Assets',
    active: true,
  },
  {
    sl: 9,
    accountGroupName: 'Operating Expenses',
    accountPrimaryGroup: 'Expenses',
    underGroup: 'Expenses',
    active: true,
  },
  {
    sl: 10,
    accountGroupName: 'Non-Operating Revenue',
    accountPrimaryGroup: 'Revenue',
    underGroup: 'Revenue',
    active: false,
  },
];



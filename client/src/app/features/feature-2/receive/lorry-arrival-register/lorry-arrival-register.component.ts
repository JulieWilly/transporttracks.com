import { Component } from '@angular/core';
import { QuickNavigationComponent } from '../../../ReuseableComponents/quick-navigation/quick-navigation.component';
import { SharableTitleComponent } from '../../../ReuseableComponents/sharable-title/sharable-title.component';
import { SharableSearchInputComponent } from '../../../ReuseableComponents/sharable-search-input/sharable-search-input.component';
import { SharableTableComponent } from '../../../ReuseableComponents/sharable-table/sharable-table.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lorry-arrival-register',
  imports: [
    QuickNavigationComponent,
    SharableTitleComponent,
    SharableSearchInputComponent,
    SharableTableComponent,
  ],
  templateUrl: './lorry-arrival-register.component.html',
  styleUrl: './lorry-arrival-register.component.css',
})
export class LorryArrivalRegisterComponent {
  currentPage: string = 'Lorry Arrival Register';
  placeholderText: string = 'Manifest No';

  displayedColumns: string[] = [
    'id',
    'containerNo',
    'mfNo',
    'mfDate',
    'from',
    'to',
    'arrivalDate',
    'arrivalTime',
    'status',
    'actions',
  ];

  dataSource = new MatTableDataSource(lorryArrivals);
  columnHeaders: Record<string, string> = {
    id: '#',
    containerNo: 'Lorry/Container No',
    mfNo: 'M/F No',
    mfDate: 'M/F Date',
    from: 'Lorry/Container From',
    to: 'Lorry/Container To',
    arrivalDate: 'Arrival Date',
    arrivalTime: 'Arrival Time',
    status: 'Status',
    actions: 'Print',
  };
}

export interface LorryArrival {
  id: number;
  containerNo: string;
  mfNo: string;
  mfDate: string;
  from: string;
  to: string;
  arrivalDate: string;
  arrivalTime: string;
  status: string;
}


export const lorryArrivals: LorryArrival[] = [
  {
    id: 1,
    containerNo: 'TN01-AA-1001',
    mfNo: 'MF001',
    mfDate: '2025-06-01',
    from: 'Chennai',
    to: 'Bangalore',
    arrivalDate: '2025-06-02',
    arrivalTime: '08:30',
    status: '',
  },
  {
    id: 2,
    containerNo: 'TN01-AA-1002',
    mfNo: 'MF002',
    mfDate: '2025-06-01',
    from: 'Madurai',
    to: 'Coimbatore',
    arrivalDate: '2025-06-02',
    arrivalTime: '10:00',
    status: '',
  },
  {
    id: 3,
    containerNo: 'TN01-AA-1003',
    mfNo: 'MF003',
    mfDate: '2025-06-01',
    from: 'Salem',
    to: 'Tirunelveli',
    arrivalDate: '2025-06-03',
    arrivalTime: '14:45',
    status: '',
  },
  {
    id: 4,
    containerNo: 'TN01-AA-1004',
    mfNo: 'MF004',
    mfDate: '2025-06-02',
    from: 'Chennai',
    to: 'Vellore',
    arrivalDate: '2025-06-03',
    arrivalTime: '09:10',
    status: '',
  },
  {
    id: 5,
    containerNo: 'TN01-AA-1005',
    mfNo: 'MF005',
    mfDate: '2025-06-02',
    from: 'Tiruppur',
    to: 'Erode',
    arrivalDate: '2025-06-03',
    arrivalTime: '07:30',
    status: '',
  },
  {
    id: 6,
    containerNo: 'TN01-AA-1006',
    mfNo: 'MF006',
    mfDate: '2025-06-03',
    from: 'Trichy',
    to: 'Nagapattinam',
    arrivalDate: '2025-06-04',
    arrivalTime: '13:20',
    status: '',
  },
  {
    id: 7,
    containerNo: 'TN01-AA-1007',
    mfNo: 'MF007',
    mfDate: '2025-06-03',
    from: 'Pondicherry',
    to: 'Chidambaram',
    arrivalDate: '2025-06-04',
    arrivalTime: '15:00',
    status: '',
  },
  {
    id: 8,
    containerNo: 'TN01-AA-1008',
    mfNo: 'MF008',
    mfDate: '2025-06-04',
    from: 'Thanjavur',
    to: 'Madurai',
    arrivalDate: '2025-06-05',
    arrivalTime: '08:10',
    status: '',
  },
  {
    id: 9,
    containerNo: 'TN01-AA-1009',
    mfNo: 'MF009',
    mfDate: '2025-06-04',
    from: 'Dindigul',
    to: 'Chennai',
    arrivalDate: '2025-06-05',
    arrivalTime: '16:40',
    status: '',
  },
  {
    id: 10,
    containerNo: 'TN01-AA-1010',
    mfNo: 'MF010',
    mfDate: '2025-06-05',
    from: 'Kanyakumari',
    to: 'Salem',
    arrivalDate: '2025-06-06',
    arrivalTime: '11:15',
    status: '',
  },
];

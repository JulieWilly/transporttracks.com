import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreOptionsBtnComponent } from '../more-options-btn/more-options-btn.component';


@Component({
  selector: 'app-expandable-table',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginator,
    MatPaginatorModule,
    CommonModule,
    MoreOptionsBtnComponent,
  ],
  templateUrl: './expandable-table.component.html',
  styleUrl: './expandable-table.component.css',
})
export class ExpandableTableComponent implements AfterViewInit {
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() displayedColumns!: string[];
  // @Input() columnHeaders!: Record<string, string>;
  @Input() columnHeaders!: any;
  @Input() showEdit = false;
  @Input() showDelete = false;
  @Input() showPrint = false;
  @Input() showLinked = false;
  @Input() showView = false;
  @Input() showCollectBtn = false;
  @Input() showUpload = false;
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];

  // columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  get columnsToDisplayWithExpand() {
    return [...this.displayedColumns, 'expand'];
  }
  expandedElement!: PeriodicElement | null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isExpanded(element: PeriodicElement) {
    return this.expandedElement === element;
  }

  toggle(element: PeriodicElement) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }

  onButtonClick(row: MatTableDataSource<any>) {
    // console.log('Row', row);
    alert('Button has been clicked.');
  }

  edit() {
    // console.log('Edit:', element);
  }

  print() {
    // console.log('Print:', element);
  }

  delete() {
    // console.log('Delete:', element);
  }

  openDetails() {
    // console.log('any', element);
  }
  openLinkedDetails() {}

  inspect() {}

  openDocuments() {}

  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  addTrip() {}

  openService() {}

  uploadFiles() {}

  mobileUpload() {}
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];

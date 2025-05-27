import { Component, Input } from '@angular/core';
import { SharableTableComponent } from '../../../../ReuseableComponents/sharable-table/sharable-table.component';

@Component({
  selector: 'app-manifest-transit-register',
  imports: [SharableTableComponent],
  templateUrl: './manifest-transit-register.component.html',
  styleUrl: './manifest-transit-register.component.css',
})
export class ManifestTransitRegisterComponent {
@Input() displayedColumns:string[] = [];

}

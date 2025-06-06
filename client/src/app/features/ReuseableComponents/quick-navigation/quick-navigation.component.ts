import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-quick-navigation',
  imports: [],
  templateUrl: './quick-navigation.component.html',
  styleUrl: './quick-navigation.component.css',
})
export class QuickNavigationComponent {
  @Input() currentPage: string='';

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}

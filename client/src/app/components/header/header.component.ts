import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAVIGATION_ITEMS } from './navigationLinksData';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
navItems = NAVIGATION_ITEMS;
}

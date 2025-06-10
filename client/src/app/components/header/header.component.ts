import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NAVIGATION_ITEMS, NavigationItem } from './navigationLinksData';

import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
// import { NAVIGATION_ITEMS, NavigationItem } from './navigationLinksData';

@Component({
  selector: 'app-header',
  imports: [NgIf, NgFor, MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('dropdown', [
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'translateY(-10px)',
          display: 'none',
        })
      ),
      state(
        'open',
        style({
          opacity: 1,
          transform: 'translateY(0)',
          display: 'block',
        })
      ),
      transition('closed <=> open', [animate('200ms ease-out')]),
    ]),
  ],
})
export class HeaderComponent {
  operations = ['Booking', 'Loading', 'Dispatch', 'Receive', 'Delivery'];
  activeItem: NavigationItem | null = null;
  side_links = ['Link A', 'Link B', 'Link C', 'Link D'];
  // hasChildren: NavigationItem | null = null;/
  // navItems = NAVIGATION_ITEMS;

  // header toggle
  isMobileMenuOpen = false;
  isDropDownOpen: number | null = null;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  links = NAVIGATION_ITEMS;

  toggleDropdown(id: number) {
    return (this.isDropDownOpen = this.isDropDownOpen === id ? null : id);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // If the click is outside any nav item
    if (!target.closest('.nav-item')) {
      this.isDropDownOpen = null;
    }
  }
  // closeDropdown() {
  //   this.isDropDownOpen = false;
  // }

  constructor(private router: Router) {}

  navigateTo(path: string) {
    console.log(path);
    this.router.navigate([path]);
  }
  // hasChildren(item: NavigationItem): boolean {
  //   return item.children && item.children.length > 0;
  // }

  // isDirectLink(item: NavigationItem): boolean {
  //   return !this.hasChildren(item);
  // }
}

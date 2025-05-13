import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NAVIGATION_ITEMS, NavigationItem } from './navigationLinksData';
import { MatIconModule } from '@angular/material/icon';

import { NgFor, NgIf } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { validateHeaderName } from 'http';
import { link } from 'fs';

@Component({
  selector: 'app-header',
  imports: [NgIf, NgFor, MatIconModule],
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
  navigationLinks = [
    {
      label: 'Dashboard',
      link: '/dashboard',
      dropDown: false,
    },
    {
      label: 'Operations',
      link: '/operations',
      dropDown: true,
    },
    {
      label: 'Accounting',
      link: '/accounting',
      dropDown: false,
    },
    {
      label: 'Reports',
      link: '/reports',
      dropDown: false,
    },
    {
      label: 'Settings',
      link: '/settings',
      dropDown: false,
    },
  ];
  operations = ['Booking', 'Loading', 'Dispatch', 'Receive', 'Delivery'];
  activeItem: string | null = null;
  side_links = ['Link A', 'Link B', 'Link C', 'Link D'];
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
}

import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVIGATION_ITEMS, NavigationItem } from './navigationLinksData';

import { NgIf } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf, RouterLinkActive],
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
}

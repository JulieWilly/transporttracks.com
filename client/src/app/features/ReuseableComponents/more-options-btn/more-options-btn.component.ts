import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-more-options-btn',
  imports: [CommonModule],
  templateUrl: './more-options-btn.component.html',
  styleUrl: './more-options-btn.component.css',
})
export class MoreOptionsBtnComponent {
  isOpen = false;

  @ViewChild('dropdown') dropdown!: ElementRef;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    console.log('2. sdklsdkl');
  }


  onClick(event: MouseEvent): void {
    console.log('1. sdklsdkl');
    if (!this.dropdown.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown-btn',
  imports: [CommonModule],
  templateUrl: './dropdown-btn.component.html',
  styleUrl: './dropdown-btn.component.css',
})
export class DropdownBtnComponent {
  isOpen = false;
  selectedOption: string | null = null;
  options = ['Default Despatch Report Format', 'Despatch Report Format 2'];

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.isOpen = false;
    // You can emit an event here if needed
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative.inline-block')) {
      this.isOpen = false;
    }
  }
}

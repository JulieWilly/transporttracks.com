import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  imports: [],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css',
})
export class DashboardCardComponent {
  @Input() amount: number = 0;
  @Input() title: string = '';
  @Input() iconClass:string='';
}

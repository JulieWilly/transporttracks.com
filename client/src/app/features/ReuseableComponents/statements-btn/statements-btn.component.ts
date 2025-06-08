import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statements-btn',
  imports: [],
  templateUrl: './statements-btn.component.html',
  styleUrl: './statements-btn.component.css',
})
export class StatementsBtnComponent {
  @Input() statementName!:string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sharable-title',
  imports: [],
  templateUrl: './sharable-title.component.html',
  styleUrl: './sharable-title.component.css'
})
export class SharableTitleComponent {

  @Input() title:string='';
}

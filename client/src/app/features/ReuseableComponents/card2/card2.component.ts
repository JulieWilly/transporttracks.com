import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  imports: [],
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.css'
})
export class Card2Component {

  @Input() cardTitle!:string;
  @Input() dataFrom!:number;
  @Input() dataTo!:number;
  
}

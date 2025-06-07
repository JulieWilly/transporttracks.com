import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-btn',
  imports: [],
  templateUrl: './add-btn.component.html',
  styleUrl: './add-btn.component.css'
})
export class AddBtnComponent {

  @Input() btnName!:string;

}

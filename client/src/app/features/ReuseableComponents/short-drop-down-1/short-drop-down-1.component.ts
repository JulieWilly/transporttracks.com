import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-short-drop-down-1',
  imports: [],
  templateUrl: './short-drop-down-1.component.html',
  styleUrl: './short-drop-down-1.component.css'
})
export class ShortDropDown1Component {

  @Input() dropDownInput!: string[];

}

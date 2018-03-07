import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rea-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  @Input() property;

  /* Text on the button i.e; Add property/ Remove property */
  @Input() buttonText: string;

  constructor() { }

  ngOnInit() {
  }

}

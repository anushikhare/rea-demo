import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rea-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  @Input() property;

  /* Text on the button i.e; Add property/ Remove property */
  @Input() buttonText: string;

  @Output() addOrRemoveProperty = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}

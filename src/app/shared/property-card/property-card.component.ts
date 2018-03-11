import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface ButtonProperties {
  text: string;
  class: string;
}

@Component({
  selector: 'rea-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  @Input() property;

  @Input() buttonProperties: ButtonProperties;

  @Output() addOrRemoveProperty = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}

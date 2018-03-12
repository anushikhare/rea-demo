import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ButtonProperties {
  text: string;
  class: string;
}

@Component({
  selector: 'rea-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {
  @Input() property;

  @Input() buttonProperties: ButtonProperties;

  @Input() showButton = true;

  @Output() addOrRemoveProperty = new EventEmitter<number>();

  constructor() {}

}

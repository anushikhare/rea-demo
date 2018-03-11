
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[reaCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-active') ishovering = false;

  @HostListener('mouseover') onMouseOver() {
    this.ishovering = true;
  }
  @HostListener('mouseout') onMouseOut() {
    this.ishovering = false;
  }
}
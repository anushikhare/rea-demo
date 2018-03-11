import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyCardComponent } from './property-card/property-card.component';
import { CardHoverDirective } from './card-hover.directive';

@NgModule({
  declarations: [
    PropertyCardComponent,
    CardHoverDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardHoverDirective,
    PropertyCardComponent
  ]
})
export class SharedModule { }

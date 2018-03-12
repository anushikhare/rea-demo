import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { CardHoverDirective } from './card-hover.directive';

@NgModule({
  declarations: [
    PropertyCardComponent,
    PropertyDetailComponent,
    CardHoverDirective
  ],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [
    TooltipModule,
    CardHoverDirective,
    PropertyCardComponent,
    PropertyDetailComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';

import { PropertyCardComponent } from './property-card/property-card.component';

@NgModule({
  declarations: [
    PropertyCardComponent
  ],
  exports: [
    PropertyCardComponent
  ]
})
export class SharedModule { }

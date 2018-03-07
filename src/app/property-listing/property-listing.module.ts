import { NgModule } from '@angular/core';

import { ResultPropertiesComponent } from './result-properties/result-properties.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ResultPropertiesComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PropertListingModule { }

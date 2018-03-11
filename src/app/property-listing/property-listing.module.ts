import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultPropertiesComponent } from './result-properties/result-properties.component';
import { SavedPropertiesComponent } from './saved-properties/saved-properties.component';
import { SharedModule } from '../shared/shared.module';
import { ResultsService } from './results.service';

@NgModule({
  declarations: [
    ResultPropertiesComponent,
    SavedPropertiesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ResultPropertiesComponent,
    SavedPropertiesComponent
  ],
  providers: [
    ResultsService
  ]
})
export class PropertyListingModule { }

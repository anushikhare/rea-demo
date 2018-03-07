import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PropertListingModule } from './property-listing/property-listing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PropertListingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

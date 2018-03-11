import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PropertyListingModule } from './property-listing/property-listing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    SharedModule,
    PropertyListingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

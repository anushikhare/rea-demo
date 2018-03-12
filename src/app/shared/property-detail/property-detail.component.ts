import { Component, Input } from '@angular/core';

import { PropertyDetail } from '../../property-listing/results.service';

@Component({
  selector: 'rea-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent {
  @Input() property: PropertyDetail;

  constructor() {}
}

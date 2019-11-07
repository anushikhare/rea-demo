import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import reject from 'lodash-es/reject';

import { ResultsService, PropertyDetail, PropertyResult } from '../results.service';
import { ButtonProperties } from '../../shared/property-card/property-card.component';

@Component({
  selector: 'rea-saved-properties',
  templateUrl: './saved-properties.component.html'
})
export class SavedPropertiesComponent implements OnInit, OnDestroy {
  private savedProperties: PropertyDetail[];
  private destroy$: Subject<void> = new Subject();

  private buttonProperties: ButtonProperties = {
    text: 'Remove Property',
    class: 'btn-danger'
  };

  constructor(public resultsService: ResultsService) {}

  ngOnInit() {
    this.resultsService.savedProperties$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(savedProperties => {
        this.savedProperties = savedProperties;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  removeProperty(id: string) {
    this.resultsService.removeProperty(id);
  }
}

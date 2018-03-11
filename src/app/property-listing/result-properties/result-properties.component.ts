import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';

import { ResultsService, PropertyDetail, PropertyResult } from '../results.service';
import { ButtonProperties } from '../../shared/property-card/property-card.component';

@Component({
  selector: 'rea-result-properties',
  templateUrl: './result-properties.component.html'
})
export class ResultPropertiesComponent implements OnInit, OnDestroy {

  private resultProperties: PropertyDetail[];
  private destroy$: Subject<void> = new Subject();

  private buttonProperties: ButtonProperties = {
    text: 'Add Property',
    class: 'btn-success'
  };

  constructor(public resultsService: ResultsService) {}

  ngOnInit() {
    this.resultsService.resultProperties$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(resultProperties => {
        this.resultProperties = resultProperties;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addProperty(id: string) {
    this.resultsService.addProperty(id);
  }
}

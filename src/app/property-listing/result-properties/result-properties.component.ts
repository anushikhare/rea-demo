import { Component, OnInit, OnDestroy } from '@angular/core';
import map from 'lodash-es/map';
import find from 'lodash-es/find';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { ResultsService, PropertyDetail, PropertyResult } from '../results.service';
import { ButtonProperties } from '../../shared/property-card/property-card.component';

interface ResultPropertyDetail extends PropertyDetail {
  isSaved: boolean;
}

@Component({
  selector: 'rea-result-properties',
  templateUrl: './result-properties.component.html'
})
export class ResultPropertiesComponent implements OnInit, OnDestroy {

  private resultProperties: ResultPropertyDetail[];
  private destroy$: Subject<void> = new Subject();

  private buttonProperties: ButtonProperties = {
    text: 'Add Property',
    class: 'btn-success'
  };

  constructor(public resultsService: ResultsService) {}

  ngOnInit() {
    // this.resultsService.resultProperties$
    //   .pipe(
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe(resultProperties => {
    //     this.resultProperties = resultProperties;
    //   });
    combineLatest(
      this.resultsService.resultProperties$,
      this.resultsService.savedProperties$
    )
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(([resultProperties, savedProperties]) => {
      this.resultProperties = map(resultProperties, (rp) => ({...rp, isSaved: !!find(savedProperties, {id: rp.id})}));
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import find from 'lodash-es/find';
import reject from 'lodash-es/reject';

export interface PropertyResult {
  results: PropertyDetail[];
  saved: PropertyDetail[];
}
export interface PropertyDetail {
  id: string;
  price: string;
  mainImage: string;
  agency: {
    brandingColors: {
      primary: string;
    },
    logo: string;
  };
}

@Injectable()
export class ResultsService {
  public savedProperties$: ReplaySubject<PropertyDetail[]> = new ReplaySubject(1);
  public resultProperties$: ReplaySubject<PropertyDetail[]> = new ReplaySubject(1);

  constructor(public http: HttpClient) {
    this.getPropertyResults()
      .pipe(
        first()
      )
      .subscribe(results => {
        this.savedProperties$.next(results.saved);
        this.resultProperties$.next(results.results);
      });
  }

  getPropertyResults(): Observable<PropertyResult> {
    return this.http.get<PropertyResult>('assets/results/results.json');
  }

  addProperty(id: string) {
    combineLatest(
      this.resultProperties$,
      this.savedProperties$
    )
    .pipe(
      first()
    )
    .subscribe(([resultProperties, savedProperties]) => {
      const property = find(resultProperties, {id});
      this.savedProperties$.next([...savedProperties, property]);
    });
  }

  removeProperty(id: string) {
    this.savedProperties$
      .pipe(
        first()
      )
      .subscribe((savedProperties) => {
        this.savedProperties$.next(reject(savedProperties, {id}));
      });
  }
}

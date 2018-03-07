import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPropertiesComponent } from './result-properties.component';

describe('ResultPropertiesComponent', () => {
  let component: ResultPropertiesComponent;
  let fixture: ComponentFixture<ResultPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

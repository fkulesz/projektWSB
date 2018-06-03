import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscrepancyEntryComponent } from './discrepancy-entry.component';

describe('DiscrepancyEntryComponent', () => {
  let component: DiscrepancyEntryComponent;
  let fixture: ComponentFixture<DiscrepancyEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscrepancyEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscrepancyEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentPartsComponent } from './frequent-parts.component';

describe('FrequentPartsComponent', () => {
  let component: FrequentPartsComponent;
  let fixture: ComponentFixture<FrequentPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

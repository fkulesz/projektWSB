import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentQuotationComponent } from './current-quotation.component';

describe('CurrentQuotationComponent', () => {
  let component: CurrentQuotationComponent;
  let fixture: ComponentFixture<CurrentQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

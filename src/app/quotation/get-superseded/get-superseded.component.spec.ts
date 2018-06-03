import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSupersededComponent } from './get-superseded.component';

describe('GetSupersededComponent', () => {
  let component: GetSupersededComponent;
  let fixture: ComponentFixture<GetSupersededComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSupersededComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSupersededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

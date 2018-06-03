import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSupersedingsComponent } from './get-supersedings.component';

describe('GetSupersedingsComponent', () => {
  let component: GetSupersedingsComponent;
  let fixture: ComponentFixture<GetSupersedingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSupersedingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSupersedingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

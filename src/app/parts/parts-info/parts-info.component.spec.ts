import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsInfoComponent } from './parts-info.component';

describe('PartsInfoComponent', () => {
  let component: PartsInfoComponent;
  let fixture: ComponentFixture<PartsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

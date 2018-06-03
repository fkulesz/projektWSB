import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBbComponent } from './current-bb.component';

describe('CurrentBbComponent', () => {
  let component: CurrentBbComponent;
  let fixture: ComponentFixture<CurrentBbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

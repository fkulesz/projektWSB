import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPartsLocatorComponent } from './global-parts-locator.component';

describe('GlobalPartsLocatorComponent', () => {
  let component: GlobalPartsLocatorComponent;
  let fixture: ComponentFixture<GlobalPartsLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPartsLocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPartsLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

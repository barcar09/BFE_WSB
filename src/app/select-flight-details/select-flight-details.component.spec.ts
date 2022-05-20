import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFlightDetailsComponent } from './select-flight-details.component';

describe('SelectFlightDetailsComponent', () => {
  let component: SelectFlightDetailsComponent;
  let fixture: ComponentFixture<SelectFlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFlightDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

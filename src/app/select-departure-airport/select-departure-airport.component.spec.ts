import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDepartureAirportComponent } from './select-departure-airport.component';

describe('SelectDepartureAirportComponent', () => {
  let component: SelectDepartureAirportComponent;
  let fixture: ComponentFixture<SelectDepartureAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDepartureAirportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDepartureAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

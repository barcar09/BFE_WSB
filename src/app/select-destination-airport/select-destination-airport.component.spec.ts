import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDestinationAirportComponent } from './select-destination-airport.component';

describe('SelectDestinationAirportComponent', () => {
  let component: SelectDestinationAirportComponent;
  let fixture: ComponentFixture<SelectDestinationAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDestinationAirportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDestinationAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

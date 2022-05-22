import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationPopupComponent } from './user-information-popup.component';

describe('UserInformationPopupComponent', () => {
  let component: UserInformationPopupComponent;
  let fixture: ComponentFixture<UserInformationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformationPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

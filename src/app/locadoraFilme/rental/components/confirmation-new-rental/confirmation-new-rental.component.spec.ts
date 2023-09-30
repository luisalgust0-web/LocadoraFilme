import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationNewRentalComponent } from './confirmation-new-rental.component';

describe('ConfirmationNewRentalComponent', () => {
  let component: ConfirmationNewRentalComponent;
  let fixture: ComponentFixture<ConfirmationNewRentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationNewRentalComponent]
    });
    fixture = TestBed.createComponent(ConfirmationNewRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

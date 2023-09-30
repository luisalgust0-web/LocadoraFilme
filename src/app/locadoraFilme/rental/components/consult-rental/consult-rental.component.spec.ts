import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultRentalComponent } from './consult-rental.component';

describe('ConsultRentalComponent', () => {
  let component: ConsultRentalComponent;
  let fixture: ComponentFixture<ConsultRentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultRentalComponent]
    });
    fixture = TestBed.createComponent(ConsultRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRentalComponent } from './new-rental.component';

describe('NewRentalComponent', () => {
  let component: NewRentalComponent;
  let fixture: ComponentFixture<NewRentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRentalComponent]
    });
    fixture = TestBed.createComponent(NewRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

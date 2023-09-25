import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroSnackBarComponent } from './erro-snack-bar.component';

describe('ErroSnackBarComponent', () => {
  let component: ErroSnackBarComponent;
  let fixture: ComponentFixture<ErroSnackBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErroSnackBarComponent]
    });
    fixture = TestBed.createComponent(ErroSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

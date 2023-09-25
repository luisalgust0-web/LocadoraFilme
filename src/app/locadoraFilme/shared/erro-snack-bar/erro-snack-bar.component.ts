import { AfterViewInit, Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-erro-snack-bar',
  templateUrl: './erro-snack-bar.component.html',
  styleUrls: ['./erro-snack-bar.component.scss']
})
export class ErroSnackBarComponent implements AfterViewInit{
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
  ngAfterViewInit(): void {}
  public erroMessage : string = this.data;
  snackBarRef = inject(MatSnackBarRef);
}

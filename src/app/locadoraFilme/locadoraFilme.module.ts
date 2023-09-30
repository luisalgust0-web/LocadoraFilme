import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocadoraFilmeRoutingModule } from './locadoraFilme-routing.module';
import { DemoMaterialModule } from '../demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './customer/components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewRentalComponent } from './rental/components/new-rental/new-rental.component';
import { ConsultRentalComponent } from './rental/components/consult-rental/consult-rental.component';
import { ErroSnackBarComponent } from './shared/erro-snack-bar/erro-snack-bar.component';
import { RentalListComponent } from './rental/components/rental-list/rental-list.component';
import { NewPaymentComponent } from './payment/components/new-payment/new-payment.component';
import { ConfirmationNewRentalComponent } from './rental/components/confirmation-new-rental/confirmation-new-rental.component';


@NgModule({
  declarations: [
    HomeComponent,
    NewRentalComponent,
    ConsultRentalComponent,
    ErroSnackBarComponent,
    RentalListComponent,
    NewPaymentComponent,
    ConfirmationNewRentalComponent
  ],
  imports: [
    CommonModule,
    LocadoraFilmeRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class LocadoraFilmeModule { }

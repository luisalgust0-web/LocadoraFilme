import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './customer/components/home/home.component';
import { NewRentalComponent } from './rental/components/new-rental/new-rental.component';
import { ConsultRentalComponent } from './rental/components/consult-rental/consult-rental.component';
import { NewPaymentComponent } from './payment/components/new-payment/new-payment.component';
import { ConfirmationNewRentalComponent } from './rental/components/confirmation-new-rental/confirmation-new-rental.component';

const routes: Routes = [
  {path: 'rent', component: HomeComponent},
  {path: 'newRental/:customerId', component : NewRentalComponent},
  {path: 'consultRental', component : ConsultRentalComponent},
  {path: 'newPayment/:rentalId', component : NewPaymentComponent},
  {path: 'confirmartionNewRental', component: ConfirmationNewRentalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    
  ],
  exports: [RouterModule]
})
export class LocadoraFilmeRoutingModule { }

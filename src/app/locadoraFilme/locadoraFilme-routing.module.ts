import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cliente/components/home/home.component';
import { NewRentalComponent } from './aluguel/components/new-rental/new-rental.component';
import { ConsultRentalComponent } from './aluguel/components/consult-rental/consult-rental.component';
import { NewPaymentComponent } from './payment/components/new-payment/new-payment.component';

const routes: Routes = [
  {path: 'rent', component: HomeComponent},
  {path: 'newRental/:customerId', component : NewRentalComponent},
  {path: 'consultRental', component : ConsultRentalComponent},
  {path: 'newPayment', component : NewPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocadoraFilmeRoutingModule { }

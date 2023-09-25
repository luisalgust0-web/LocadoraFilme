import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../service/cliente.service';
import { Customer } from '../../models/customer';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (
    private fb : FormBuilder,
    private service : ClienteService,
    private route : Router
    ) {} 

  public customers = [] as Customer[]
  public name! : any

  public getCustomerByName(){
    this.service.GetCustomerByName(this.name).subscribe((resp : Customer[] ) =>{
      this.customers = resp
    })
  }

  public newRental(){
    if(!this.name.customer_id) return;
    this.route.navigate([`/locadoraFilmes/newRental/${this.name.customer_id}`])
  }

  customerName (customer : Customer ): string{
    return customer && customer.first_name ? customer.first_name : "";
  }
}

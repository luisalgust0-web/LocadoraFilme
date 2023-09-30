import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Payment } from '../models/payment';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http : HttpClient
  ) { }

  private urlAPI = environment.url+"Payment/";

  public getAmount(rental_id : number) : any {
    var url = `${this.urlAPI}GetAmount`


    return this.http.post(url,rental_id);
  }

  public addPayment(payment_id : number, customer_id : number, staff_id : number, rental_id : number, amount : number, payment_date : Date, last_update : Date) : any{
    var url = this.urlAPI+"AddItem"

    var props = {
      "Payment_id" : payment_id,
      "Customer_id" : customer_id,
      "Staff_id" : staff_id,
      "Rental_id" : rental_id,
      "Amount" : amount,
      "Payment_date" : payment_date,
      "Last_update" : last_update
    }

    return this.http.post(url,props);
  }
}

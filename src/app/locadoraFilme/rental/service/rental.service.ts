import { T } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { publishFacade } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Rental, TipoSituacao } from '../models/rental';
import { DatePipe } from '@angular/common';
import { createUrlTreeFromSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  constructor(private http : HttpClient, private datePipe : DatePipe) { }
  urlAPI = environment.url + "Rental/";

  public getRentalById(customer_id : number) : any{
    var url = this.urlAPI+`GetItem/${customer_id}`;
    return this.http.get(url);
  }

  public getRentals(customer_id: any, film_id: any, dataInicio: Date | null, dataFinal: Date | null) : any{

    var url = this.urlAPI+`GetLista`;
    var params = '';

    if(customer_id){
      params = `customerId=${customer_id}`;
    }

    if(film_id){
      params = `${url}&filmId=${film_id}`;
    }

    if(dataInicio){
      var dataFormatada = this.datePipe.transform(dataInicio, 'yyyy-MM-ddTHH:mm:ss');
      params = `${url}&dataInicio=${dataFormatada}`;
    }

    if(dataFinal){
      var dataFormatada = this.datePipe.transform(dataFinal, 'yyyy-MM-ddTHH:mm:ss');
      params = `${url}&dataFinal=${dataFormatada}`;
    }

    /*
      Colocar codigo para a dataIncio e dataFim serem obrigatórias.
    */

      url = url + '?' + params;

    return this.http.get<Rental[]>(url);
  }

  public addRental(rental : Rental) : any{
    var props = {
      "Rental_id" : rental.rental_id,
      "Rental_date" : rental.rental_date,
      "Inventory_id" : rental.inventory_id,
      "Customer_id" : rental.customer_id,
      "Staff_id" : rental.staff_id,
      "Last_update" : rental.last_update, 
      "Forecast_date": rental.forecast_date,
      "Situacao" : rental.situacao
    }

    var url = this.urlAPI+"AddItem";

    return this.http.post<Rental>(url,props);
  }

  public updateRental(rental_id : number, rental_date : Date, inventory_id : number, customer_id : number, return_date : Date | null, staff_id : number, last_update : Date, forecast_date : Date, situacao : number
  ){
    var props = {
      "Rental_id" : rental_id,
      "Rental_date" : rental_date,
      "Inventory_id" : inventory_id,
      "Customer_id" : customer_id,
      "Return_date" : return_date,
      "Staff_id" : staff_id,
      "Last_update" : last_update,
      "Forecast_date": forecast_date,
      "Situacao" : situacao
    }

    var url = this.urlAPI+"UpdateItem";

    return this.http.post(url,props); 

  }
}

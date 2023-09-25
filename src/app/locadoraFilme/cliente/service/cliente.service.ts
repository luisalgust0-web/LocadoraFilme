import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http : HttpClient) { }

  private urlAPI = environment.url+"Customer/"

  public GetCustomerByName(name : string) : any{

    var url : string = this.urlAPI+`GetCustomerByName?name=${name}`; 
    return this.http.get<Customer>(url);
  }

  public GetCustomerById(id : number) : any{
    var url : string = `${this.urlAPI}GetItemById/${id}`

    return this.http.get<Customer>(url);
  }
}

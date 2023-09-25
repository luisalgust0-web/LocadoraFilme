import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Inventory } from '../models/inventory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http : HttpClient) { }
  
  private urlAPI = environment.url+"Inventory/"

  public GetInventoryByFilmId(id : number) : Observable<Inventory> {
      var url = `${this.urlAPI}GetInventoryByFilmId/${id}`

      return this.http.get<Inventory>(url);
  }
}

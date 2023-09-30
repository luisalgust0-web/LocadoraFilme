import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http : HttpClient) {}

  private urlAPI : string = environment.url+"Category/";

  public getCategorys() : any {
    var url : string = this.urlAPI + "GetLista"

    return this.http.get<Category>(url);
  }
}

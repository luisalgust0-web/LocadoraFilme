import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private http : HttpClient) { }

  private urlAPI : string = environment.url+"Language/"

  public GetLanguages() : any {
    var url = this.urlAPI+"GetLista"

    return this.http.get<Language>(url);
  }
}

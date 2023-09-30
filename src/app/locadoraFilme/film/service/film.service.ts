import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Film } from '../models/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http : HttpClient) {}

  private urlAPI : string = environment.url+"Film/"

  public getFilms() : any {
    var url : string = this.urlAPI+"GetLista"

    return this.http.get<Film>(url);
  }
 
  public getFilmsByTitle(title : string) : any {
    var url : string = `${this.urlAPI}GetListaByTitle?title=${title}`

    return this.http.get<Film>(url);
  }

  public getFilmsById(id : number) : any {
    var url = `${this.urlAPI}GetItem/${id}`

    return this.http.get<Film>(url)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { film_category } from '../models/film_category';

@Injectable({
  providedIn: 'root'
})
export class FilmCategoryService {

  constructor(private http :  HttpClient) { }

  private urlAPI = environment.url+"Film_category/"

  public getFilm_category(filmeTitle: string, categoryId: number | null, languageId: number | null) : any{
    var url = this.urlAPI+`GetListaFilmCategorys?title=${filmeTitle}`;

    if(categoryId){
      url = `${url}&categoryId=${categoryId}`
    }
    
    if(languageId){
      url = `${url}&languageId=${languageId}`
    }
    
    return this.http.get<film_category>(url);
  }
}

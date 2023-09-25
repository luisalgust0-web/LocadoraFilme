import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../service/rental.service';
import { CategoryService } from 'src/app/locadoraFilme/category/service/category.service';
import { LanguageService } from 'src/app/locadoraFilme/language/service/language.service';
import { Category } from 'src/app/locadoraFilme/category/models/category';
import { Language } from 'src/app/locadoraFilme/language/models/language';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Inventory } from 'src/app/locadoraFilme/inventory/models/inventory';
import { film_category } from 'src/app/locadoraFilme/filmCategory/models/film_category';
import { FilmCategoryService } from 'src/app/locadoraFilme/filmCategory/service/film-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/locadoraFilme/cliente/service/cliente.service';
import { Customer } from 'src/app/locadoraFilme/cliente/models/customer';
import { Rental } from '../../models/rental';
import { InventoryService } from 'src/app/locadoraFilme/inventory/service/inventory.service';
import { Film } from 'src/app/locadoraFilme/film/models/Film';

@Component({
  selector: 'app-new-rental',
  templateUrl: './new-rental.component.html',
  styleUrls: ['./new-rental.component.scss']
})
export class NewRentalComponent implements OnInit {

  public categorys: Category[] = [] as Category[];
  public languages: Language[] = [] as Language[];
  public film_category: film_category[] = [] as film_category[];

  public inventory!: Inventory;
  public customer! : Customer;
  public film! : film_category;

  public categoryId! : number;
  public languageId! : number;

  public RentalDate : Date = new Date();
  public ForecastDate! : Date;

  constructor(
    private categoryService: CategoryService,
    private rentalServie : RentalService,
    private customerService : ClienteService,
    private languageService: LanguageService,
    private inventoryService : InventoryService,
    private film_categoryService: FilmCategoryService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route : Router
  ) { }

    public rentalForm : FormGroup = this.fb.group({
      last_update : new Date(),
      rental_date : this.RentalDate,
      rental_id : 0 ,
      staff_id : 1,
    })

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    var customerId = routeParams.get('customerId');
    this.customerService.GetCustomerById(Number(customerId)).subscribe( (resp : Customer) => {
      this.customer = resp;
    });

    this.categoryService.GetCategorys().subscribe((resp: Category[]) => {
      this.categorys = resp;
    });
    this.languageService.GetLanguages().subscribe((resp: Language[]) => {
      this.languages = resp;
    });
  }

  public GetFilmCategoryList(event : any){
    this.film_categoryService.getFilm_category(event.target.value,this.categoryId,this.languageId).subscribe( (resp : film_category[]) => {
      this.film_category = resp;
    } )
  }

  public filmName(film: film_category): string {
    return film && film.filmTitle ? film.filmTitle : "";
  }

  public selecionar(film : film_category){
    this.inventoryService.GetInventoryByFilmId(film.film_id).subscribe( (resp : Inventory) => {
      this.inventory = resp;
    });
  }

  public addRental() {
    this.rentalServie.AddRental(
      this.rentalForm.controls.rental_id.value,
      this.rentalForm.controls.rental_date.value,
      this.inventory.inventory_id,
      this.customer.customer_id,
      this.rentalForm.controls.staff_id.value,
      this.rentalForm.controls.last_update.value,
      this.ForecastDate,
      1
      ).subscribe((res : any )=>{})
  }

  public voltar(){
    this.route.navigate(["/locadoraFilmes"])
  }
}

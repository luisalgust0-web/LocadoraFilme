import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../service/rental.service';
import { CategoryService } from 'src/app/locadoraFilme/category/service/category.service';
import { LanguageService } from 'src/app/locadoraFilme/language/service/language.service';
import { Category } from 'src/app/locadoraFilme/category/models/category';
import { Language } from 'src/app/locadoraFilme/language/models/language';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Inventory } from 'src/app/locadoraFilme/inventory/models/inventory';
import { film_category } from 'src/app/locadoraFilme/filmCategory/models/film_category';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/locadoraFilme/inventory/service/inventory.service';
import { FilmCategoryService } from 'src/app/locadoraFilme/filmCategory/service/film-category.service';
import { Rental } from '../../models/rental';

@Component({
  selector: 'app-new-rental',
  templateUrl: './new-rental.component.html',
  styleUrls: ['./new-rental.component.scss']
})
export class NewRentalComponent implements OnInit {

  public categorys: Category[] = [] as Category[];
  public languages: Language[] = [] as Language[];
  public films_category: film_category[] = [] as film_category[];

  public film!: film_category;

  public categoryId!: number;
  public languageId!: number;
  public inventoryId: number = 0;
  public customerId!: number;

  public rentalDate: Date = new Date();
  public forecastDate: Date = new Date();

  constructor(
    private categoryService: CategoryService,
    private rentalServie: RentalService,
    private languageService: LanguageService,
    private inventoryService: InventoryService,
    private film_categoryService: FilmCategoryService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route: Router,
  ) { }

  public rentalForm: FormGroup = this.fb.group({
    last_update: this.fb.control<Date>(new Date()),
    rental_date: this.fb.control<Date | null>({ value: new Date(), disabled: true }),
    rental_id: this.fb.control<number>(0),
    staff_id: this.fb.control<number>(1),
    inventory_id: this.fb.control<number | null>(null),
    customer_id: this.fb.control<number | null>(null),
    forecast_date: this.fb.control<Date | null>(null),
    situacao: this.fb.control<number>(1)
  })

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    this.rentalForm.controls.customer_id.setValue(Number(routeParams.get('customerId')));

    this.categoryService.getCategorys().subscribe((resp: Category[]) => {
      this.categorys = resp;
    });

    this.languageService.getLanguages().subscribe((resp: Language[]) => {
      this.languages = resp;
    });
  }

  public getFilmCategoryList(event: any) {
    this.film_categoryService.getFilm_categorys(event.target.value, this.categoryId, this.languageId).subscribe((resp: film_category[]) => {
      this.films_category = resp;
    })
  }

  public selecionar(film: film_category) {
    this.inventoryService.getInventoryByFilmId(film.film_id).subscribe((resp: Inventory) => {
      this.rentalForm.controls.inventory_id.setValue(resp.inventory_id);
    });
  }

  public filmName(film: film_category): string {
    return film && film.filmTitle ? film.filmTitle : "";
  }


  public addRental() {
    var inputRental : Rental = this.rentalForm.getRawValue();
    this.rentalServie.addRental(inputRental).subscribe((res: any) => {
      var rental : Rental = res;
      this.route.navigate([`/locadoraFilmes/confirmartionNewRental/${rental.rental_id}`])
    })
  }

  public voltar() {
    this.route.navigate(["/locadoraFilmes/rent"])
  }
}

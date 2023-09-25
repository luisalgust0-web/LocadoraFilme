import { Component, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/locadoraFilme/cliente/models/customer';
import { ClienteService } from 'src/app/locadoraFilme/cliente/service/cliente.service';
import { Film } from 'src/app/locadoraFilme/film/models/Film';
import { FilmService } from 'src/app/locadoraFilme/film/service/film.service';
import { RentalService } from '../../service/rental.service';
import { Rental } from '../../models/rental';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consult-rental',
  templateUrl: './consult-rental.component.html',
  styleUrls: ['./consult-rental.component.scss']
})
export class ConsultRentalComponent {

  public films = [] as Film[];
  public customers = [] as Customer[];
  public rentals = [] as Rental[];

  public filmId!: number ;
  public customerId!: number;

  public dataInicio: any;
  public dataFinal: any;

  customer?:Customer | null = null;
  film:Film | null = null;


  constructor(
    private filmService: FilmService,
    private customerService: ClienteService,
    private service: RentalService,
    private _snackBar: MatSnackBar
  ) { }

  public GetFilmList(event: any) {
    this.filmService.GetFilmsByTitle(event.target.value).subscribe((resp: Film[]) => {
      this.films = resp;
    })
  }

  public GetCustomerList(event: any) {
    this.customerService.GetCustomerByName(event.target.value).subscribe((resp: Customer[]) => {
      this.customers = resp;
    })
  }

  public customerName(customer: Customer): string {
    return customer.first_name! + ' ' + customer.last_name!;
  }

  public selecionarCustomer(customer: Customer) {
    this.customerId = customer.customer_id;
    this.customers = [];
  }

  public filmName(film: Film): string {
    return film.title;
  }

  public selecionarFilm(film: Film) {
    this.filmId = film.film_id;
    this.films = [];
  }


  public GetRental() {

    if(!this.customer){
      this._snackBar.open("O cliente é borgitório", "Erro");
      return;
    }

    this.service.GetRentals(this.customer?.customer_id, this.film?.film_id, this.dataInicio, this.dataFinal).subscribe((resp: Rental[]) => {
      this.rentals = resp;
    })
  }
}

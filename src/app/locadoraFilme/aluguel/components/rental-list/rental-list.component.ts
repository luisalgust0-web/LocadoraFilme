import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Rental, Situacao } from '../../models/rental';
import { ConsultRentalComponent } from '../consult-rental/consult-rental.component';
import { RentalService } from '../../service/rental.service';
import { S } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent {

  @Input() public rentals = [] as Rental[];
  public rental!: Rental;
  displayedColumns = ["nomeCliente", "titleFilm", "rentalDate", "forecastDate", "returnDate", "situacao"]

  constructor(public service: RentalService, public route: Router) { }

  public GetRental(rental_id: number): any {

    this.service.GetRentalsById(rental_id).subscribe((resp: Rental) => {
      this.rental = resp;
      this.rotinaSituacao(this.rental);
    });
  }

  public rotinaSituacao(rental: Rental) {
    switch (this.rental.situacao.toString()) {
      case "alugado": {
        this.rental.return_date = new Date();
        this.rental.situacao = 2;
        this.rental.last_update = new Date();
        return this.service.UpdateRental(this.rental.rental_id, this.rental.rental_date, this.rental.inventory_id, this.rental.customer_id, this.rental.return_date!, this.rental.staff_id, this.rental.last_update, this.rental.forecast_date, this.rental.situacao).subscribe((resp: any) => {
        });
      }
      case "devolvido": {
        return this.route.navigate([`/locadoraFilmes/newPayment/${this.rental.rental_id}`]);
      }
      default: break;
    }
    return;
  }

  getColorButtom(item:Rental):string{
    switch(item.situacao){
      case Situacao.alugado:
        return "primary";
      case Situacao.devolvido:
        return "accent";
      default:
        return "secondary";
    }
    
  }

  getTextButtom(item:Rental):string{
    switch(item.situacao){
      case Situacao.alugado:
        return "Devolver";
      case Situacao.devolvido:
        return "Pagar";
      default:
        return "Ok";
    }
  }

  get Situacao(){
    return Situacao;
  }
}

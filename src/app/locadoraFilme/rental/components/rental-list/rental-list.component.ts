import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Rental, TipoSituacao } from '../../models/rental';
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

  public getRental(rental_id: number): any {

    this.service.getRentalById(rental_id).subscribe((resp: Rental) => {
      this.rental = resp;
      this.rotinaSituacao(this.rental);
    });
  }

  getColorButtom(item:Rental):string{
    switch(item.situacao){
      case TipoSituacao.alugado:
        return "primary";
      case TipoSituacao.devolvido:
        return "accent";
      default:
        return "secondary";
    }
    
  }

  getTextButtom(item:Rental):string{
    switch(item.situacao){
      case TipoSituacao.alugado:
        return "Devolver";
      case TipoSituacao.devolvido:
        return "Pagar";
      default:
        return "Ok";
    }
  }

  get Situacao(){
    return TipoSituacao;
  }

  public rotinaSituacao(rental: Rental) {
    switch (rental.situacao) {
      case TipoSituacao.alugado: {
        rental.return_date = new Date();
        rental.situacao = 2;
        rental.last_update = new Date();
        return this.service.updateRental(rental.rental_id, rental.rental_date, rental.inventory_id, rental.customer_id, rental.return_date!, rental.staff_id, rental.last_update, rental.forecast_date, rental.situacao).subscribe((resp: any) => {
          
        });
      }
      case TipoSituacao.devolvido: {
        return this.route.navigate([`/locadoraFilmes/newPayment/${rental.rental_id}`]);
      }
      default: break;
    }
    return;
  }
}

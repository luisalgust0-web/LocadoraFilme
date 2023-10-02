import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { RentalService } from '../../service/rental.service';
import { Rental, TipoSituacao } from '../../models/rental';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirmation-new-rental',
  templateUrl: './confirmation-new-rental.component.html',
  styleUrls: ['./confirmation-new-rental.component.scss']
})
export class ConfirmationNewRentalComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private _snackBar: MatSnackBar
  ) { }

  filmTitle!: string;
  customerName!: string;
  situacao!: string;
  rental_date!: Date;
  forecast_date!: Date;

  ngOnInit(): void {
    this._snackBar.open("Aluguel realizado com sucesso", 'close', {
      panelClass: ["Sucess"]
    });

    const routeParams = this.activatedRoute.snapshot.paramMap;
    this.rentalService.getRentalById(Number(routeParams.get('rentalId'))).subscribe((resp: Rental) => {
      this.filmTitle = resp.inventory_Film_Title!;
      this.customerName = resp.customer_First_Name + " " + resp.customer_Last_Name;
      this.situacao =  this.obterNomeSituacao(resp.situacao)
      this.rental_date = resp.rental_date;
      this.forecast_date = resp.forecast_date;
    });
  }

  obterNomeSituacao(tipo : TipoSituacao) : string{
    switch (tipo){
      case TipoSituacao.alugado :
        return "alugado"
      default  :
        return ""
    }
  }

  gerarRelatorio() {
    this._snackBar.open("Relatório gerado com sucesso", 'close', {
      panelClass: ["Sucess"]
    });
  }
}

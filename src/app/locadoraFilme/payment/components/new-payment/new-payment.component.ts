import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Rental } from 'src/app/locadoraFilme/rental/models/rental';
import { RentalService } from 'src/app/locadoraFilme/rental/service/rental.service';
import { Customer } from 'src/app/locadoraFilme/customer/models/customer';
import { PaymentService } from '../../service/payment.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {
  public rental!: Rental;
  public customerName: string = "";
  public filmTitle: string = "";
  public dataRetorno: Date = new Date();
  public valorAluguel!: number;


  constructor(
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private paymentService: PaymentService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    var rentalId = routeParams.get('rentalId');
    this.rentalService.getRentalById(Number(rentalId)).subscribe((resp: Rental) => {
      this.rental = resp;
      this.customerName = resp.customer_First_Name! + " " + resp.customer_Last_Name!;
      this.filmTitle = resp.inventory_Film_Title!;
      if (resp.return_date != null) {
        this.dataRetorno = resp.rental_date;
      };
    });
    this.paymentService.getAmount(Number(rentalId)).subscribe((resp: number) => {
      this.valorAluguel = Number(resp.toFixed());
    });

  }

  public voltar() {
    this.route.navigate(["/locadoraFilme/consultRental"])
  }

  public addPayment() {
    this.paymentService.addPayment(0, this.rental.customer_id, this.rental.staff_id, this.rental.rental_id, this.valorAluguel, new Date(), new Date()).subscribe((resp: any) => {
      this.rentalService.updateRental(this.rental.rental_id,this.rental.rental_date,this.rental.inventory_id,this.rental.customer_id,this.rental.rental_date,this.rental.staff_id,this.rental.last_update,this.rental.forecast_date,3).subscribe( (resp : any) => {
        this._snackBar.open("operação realizada com sucesso", 'close', {
          panelClass: ["Sucess"]
        });
      } )
    });
  }
}

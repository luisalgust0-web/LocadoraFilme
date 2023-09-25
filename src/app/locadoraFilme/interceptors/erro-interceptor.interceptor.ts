import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
  JsonpInterceptor
} from '@angular/common/http';
import { EMPTY, Observable, catchError, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErroSnackBarComponent } from '../shared/erro-snack-bar/erro-snack-bar.component';

@Injectable()
export class ErroInterceptorInterceptor implements HttpInterceptor {

  constructor(private _snackBar: MatSnackBar) {}

  // durationInSeconds = 5;
  // openSnackBar(message : string) {
  //   this._snackBar.openFromComponent(ErroSnackBarComponent, {
  //     duration: this.durationInSeconds * 1000,
  //     announcementMessage : message
  //   });
  // }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((evt:any) => {
        if (evt instanceof HttpResponse) {

          if(evt.body && evt.body.message){
            this._snackBar.open(evt.body.message, 'close', {
              panelClass : [evt.body.typeExcpetion]
            });

          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        // this.msgService.add({severity:'info', summary: 'Erro', detail: error.message ?? error.error.message});
         return EMPTY;
      })
    );
  }
}
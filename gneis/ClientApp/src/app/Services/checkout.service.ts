import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Checkout } from '../Models/checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl: string;
  constructor(
  private http: HttpClient,
  @Inject('BASE_URL') baseUrl: string,
  private handleErrorService: HandleHttpErrorService)
  {
    this.baseUrl = baseUrl;
  }
  gets(): Observable<Checkout[]> {
    return this.http.get<Checkout[]>(this.baseUrl + 'api/Checkout')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Checkout[]>('Consulta Checkout', null))
        );
  }

  post(checkout: Checkout): Observable<Checkout> {
    return this.http.post<Checkout>(this.baseUrl + 'api/Checkout', checkout)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Checkout>('Registrar Checkout', null))
        );
  }

  delete(idcheckout: string): Observable<string>{
    return this.http.delete<string>(this.baseUrl +'api/Checkout/'+ idcheckout)
    .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<string>('Eliminar Checkout', null))
  );
  }
}

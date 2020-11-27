import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Habitacion } from '../Models/habitacion';
import { Reserva } from '../Models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  baseUrl: string;
  constructor(
  private http: HttpClient,
  @Inject('BASE_URL') baseUrl: string,
  private handleErrorService: HandleHttpErrorService)
  {
    this.baseUrl = baseUrl;
  }

  post(reserva : Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.baseUrl + 'api/Reserva', reserva)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Reserva>('Registrar Reserva', null))
        );
  }
}

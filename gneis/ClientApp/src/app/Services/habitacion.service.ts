import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Habitacion } from '../Models/habitacion';


@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  baseUrl: string;
  constructor(
  private http: HttpClient,
  @Inject('BASE_URL') baseUrl: string,
  private handleErrorService: HandleHttpErrorService)
  {
    this.baseUrl = baseUrl;
  }

  gets(): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(this.baseUrl + 'api/Habitacion')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Habitacion[]>('Consulta Habitacion', null))
        );
  }

  get(idhabitacion: string): Observable<Habitacion> {
    return this.http.get<Habitacion>(this.baseUrl + 'api/Habitacion/'+ idhabitacion)
        .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Habitacion>('Consulta Habitacion', null))
    );
  }

  post(habitacion : Habitacion): Observable<Habitacion> {
    return this.http.post<Habitacion>(this.baseUrl + 'api/Habitacion', habitacion)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Habitacion>('Registrar Habitacion', null))
        );
  }

  delete(idhabitacion: string): Observable<Habitacion>{
      return this.http.delete<Habitacion>(this.baseUrl +'api/Habitacion/'+ idhabitacion)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Habitacion>('Eliminar Habitacion', null))
    );
    
  }

  update(habitacion : Habitacion):Observable<string>{
    return this.http.put<string>(this.baseUrl + 'api/Habitacion', habitacion)
    .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<string>('Actualizar Habitacion', null))
    );
  }
}

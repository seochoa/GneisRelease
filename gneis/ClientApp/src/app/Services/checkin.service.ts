import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Checkin } from '../Models/checkin';


@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  baseUrl: string;
  constructor(
  private http: HttpClient,
  @Inject('BASE_URL') baseUrl: string,
  private handleErrorService: HandleHttpErrorService)
  {
    this.baseUrl = baseUrl;
  }

  gets(): Observable<Checkin[]> {
    return this.http.get<Checkin[]>(this.baseUrl + 'api/Checkin')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Checkin[]>('Consulta Checkin', null))
        );
  }

  post(checkin: Checkin): Observable<Checkin> {
    return this.http.post<Checkin>(this.baseUrl + 'api/Checkin', checkin)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Checkin>('Registrar Checkin', null))
        );
  }

  delete(idcheckin: string): Observable<string>{
    return this.http.delete<string>(this.baseUrl +'api/Checkin/'+ idcheckin)
    .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<string>('Eliminar Checkin', null))
  );
  }
}

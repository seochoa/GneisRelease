import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Usuario } from '../Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string;
  constructor(
  private http: HttpClient,
  @Inject('BASE_URL') baseUrl: string,
  private handleErrorService: HandleHttpErrorService)
  {
    this.baseUrl = baseUrl;
  }

  gets(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl + 'api/Usuario')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Usuario[]>('Consulta Usuario', null))
        );
  }

  post(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl + 'api/Usuario', usuario)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Usuario>('Registrar Usuario', null))
        );
  }

  delete(iduser: string): Observable<string>{
      return this.http.delete<string>(this.baseUrl +'api/Usuario/'+ iduser)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<string>('Eliminar Usuario', null))
    );
    
  }

  update(usuario : Usuario):Observable<string>{
    return this.http.put<string>(this.baseUrl + 'api/Usuario', usuario)
    .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<string>('Actualizar Usuario', null))
    );
  }

}

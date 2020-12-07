import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Usuario } from '../Models/usuario';
import { User } from '../seguridad/user';

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

  gets(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'api/Usuario')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<User[]>('Consulta Usuario', null))
        );
  }

  post(usuario: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'api/Usuario', usuario)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<User>('Registrar Usuario', null))
        );
  }

  delete(iduser: string): Observable<string>{
      return this.http.delete<string>(this.baseUrl +'api/Usuario/'+ iduser)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<string>('Eliminar Usuario', null))
    );
    
  }

  update(usuario : User):Observable<User>{
    return this.http.put<User>(this.baseUrl + 'api/Usuario', usuario)
    .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<User>('Actualizar Usuario', null))
    );
  }

}

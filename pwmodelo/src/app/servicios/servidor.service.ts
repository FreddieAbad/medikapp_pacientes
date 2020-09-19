import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Servidor } from 'src/app/modelos/servidor/servidor.model';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServidorService {
  constructor(private httpClient: HttpClient) { }
  public getServidor(cedula: String): Observable<Servidor> {
    // https://medium.com/swlh/angular-7-models-cd0cd80f5e33
    // https://nehalist.io/working-with-models-in-angular
    return this.httpClient.get<Servidor>(`http://localhost:8081/obtener?cedula=${cedula}`).pipe(
      map(data => new Servidor().deserialize(data)),
      catchError(() => throwError('User not found'))
    );
  }
}

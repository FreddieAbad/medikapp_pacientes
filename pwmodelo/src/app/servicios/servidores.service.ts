import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servidores } from 'src/app/modelos/servidores/servidores.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServidoresService {
  constructor(private httpClient: HttpClient) { }
  public getAllServidores(p1: String, p2: String, p3: String, p4: String): Observable<Servidores[]> {
    var uri = `http://localhost:8081/nuevoCalculo?peso1=${p1}&peso2=${p2}&peso3=${p3}&peso4=${p4}`;
    return this.httpClient.get<Servidores[]>(uri).pipe(
      map(data => data.map(data => new Servidores().deserialize(data)))
    );
  }
}

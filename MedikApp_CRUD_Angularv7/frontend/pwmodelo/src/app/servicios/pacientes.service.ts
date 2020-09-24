import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Paciente } from 'src/app/modelos/paciente/paciente.model';
import { catchError, map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class PacienteService {
    // httpOptions = {
    //     headers: new HttpHeaders({
    //         'Content-Type': 'application/json'
    //     })
    // }
    constructor(private httpClient: HttpClient) { }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
    public getAllPacientes(): Observable<Paciente[]> {
        var uri = `https://localhost:5001/api/paciente`;
        return this.httpClient.get<Paciente[]>(uri).pipe(
            map(data => data.map(data => new Paciente().deserialize(data)))
        );
    }
    public putPaciente(id, paciente): Observable<Paciente> {
        // JSON.stringify(paciente)
        return this.httpClient.put<Paciente>(`/api/paciente/${id}`, paciente);//, this.httpOptions
    }
    public eliminarPaciente(_id: string): any {
        var url = `https://localhost:5001/api/paciente/${_id}`;
        return this.httpClient.delete(url).pipe(
            catchError(this.errorHandler)
        )
    }
    public postPaciente(paciente: any): Observable<any> {
        // var headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        // id, nombre,id_doctor, telefono, direccion
        // {
        //     headers: new HttpHeaders({
        //          'Content-Type':  'application/json',
        //        })
        //   }
        return this.httpClient.post('/api/paciente', paciente);
    }

}





import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    public getAllPacientes(): Observable<Paciente[]> {
        var uri = `https://localhost:5001/api/paciente`;
        return this.httpClient.get<Paciente[]>(uri).pipe(
            map(data => data.map(data => new Paciente().deserialize(data)))
        );
    }
    public putUpdatePaciente(id, paciente): Observable<Paciente> {
        return this.httpClient.put<Paciente>('https://localhost:5001/api/paciente/' + id, JSON.stringify(paciente));//, this.httpOptions
    }
    public eliminarPaciente(_id){
        return "Paciente Eliminado";
    }

}





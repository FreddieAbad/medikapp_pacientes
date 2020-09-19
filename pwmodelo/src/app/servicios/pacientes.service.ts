import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from 'src/app/modelos/paciente/paciente.model';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class PacienteService {
    constructor(private httpClient: HttpClient) { }
    //   public getAllServidores(p1: String, p2: String, p3: String, p4: String): Observable<Servidores[]> {
    //     var uri = `http://localhost:8081/nuevoCalculo?peso1=${p1}&peso2=${p2}&peso3=${p3}&peso4=${p4}`;
    //     return this.httpClient.get<Servidores[]>(uri).pipe(
    //       map(data => data.map(data => new Servidores().deserialize(data)))
    //     );
    //   }
    public getAllPacientes(){
        var p1 = new Paciente(1, "Paciente1", 1, "2340585 985632", "asdasfasdf fasdfasdf");
        var p2 = new Paciente(2, "Paciente2", 1, "2340585 985632", "asdasfasdf fasdfasdf");
        var p3 = new Paciente(3, "Paciente3", 1, "2340585 985632", "asdasfasdf fasdfasdf");

        var jsonRespuesta = [{
            "nombre": "Paciente1",
            "id_doctor": 1,
            "id": 1,
            "telefono": "(07) 2340 581 - 09885963520",
            "direccion": "Av Solano"
        },
        {
            "nombre": "Paciente1",
            "id_doctor": 1,
            "id": 1,
            "telefono": "(07) 2340 581 - 09885963520",
            "direccion": "Av Solano"
        },
        {
            "nombre": "Paciente1",
            "id_doctor": 1,
            "id": 1,
            "telefono": "(07) 2340 581 - 09885963520",
            "direccion": "Av Solano"
        }];
        // jsonRespuesta.map((clase)=>  {
        //     return new Paciente().deserialize(clase);
        // });
        // return jsonRespuesta.map(data => data.map(data => new Paciente().deserialize(data)));
    }
}

import { Deserializable } from "./deserializable.model";


export class Paciente {
  id: string;
  nombre:string;
  id_doctor: number;
  telefono: string;
  direccion: string;
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
  setValuesInstanceUpdate(_nombres,_id_doctor,_telefono,_direccion){
    this.nombre=_nombres;
    this.id_doctor=_id_doctor ;
    this.telefono= _telefono;
    this.direccion= _direccion;
  }
}

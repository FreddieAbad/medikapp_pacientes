import { Deserializable } from "./deserializable.model";


export class Paciente {
  id: number;
  nombres:string;
  id_doctor: number;
  telefono: string;
  direccion: string;
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
  constructor(_id,_nombres,_id_doctor,_telefono,_direccion){
    id: _id;
    nombres:_nombres;
    id_doctor:_id_doctor ;
    telefono: _telefono;
    direccion: _direccion;
  }
}
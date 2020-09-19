import { Deserializable } from "./deserializable.model";


export class Servidor {
  cedula: string;
  nombres:string;
  depedencia: string;
  tipoServidor: string;
  titularidad: string;
  dedicacion: string;
  facDedicacion: string;
  pesoDedicacion: string;
  facTitularidad: string;
  pesoTitularidad: string;
  facDistancia: string;
  pesoDistancia: string;
  facCautividad: string;
  pesoCautividad: string;
  tarifa: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
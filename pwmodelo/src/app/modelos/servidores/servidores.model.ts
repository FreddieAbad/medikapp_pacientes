import { Deserializable } from "./deserializable.model";


export class Servidores {
  cedula: string;
  facDedicacion: string;
  facTitularidad: string;
  facDistacancia: string;
  facCautividad: string;
  tarifa: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
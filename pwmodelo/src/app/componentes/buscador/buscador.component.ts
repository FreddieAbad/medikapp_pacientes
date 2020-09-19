import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/servicios/pacientes.service';
import { Servidor } from 'src/app/modelos/servidor/servidor.model';
import { Paciente } from 'src/app/modelos/paciente/paciente.model';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  public servidor: Servidor;
  public paciente: Paciente[];

  constructor(private pacienteService: PacienteService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }


  // public getAllServidoresControlador(){
  //   this.pacienteService.getAllPacientes().subscribe(servidores => {
  //     var tarifas = servidores[servidores.length - 1];
  //     servidores.splice(servidores.length - 1, 1);
  //     this.servidores = servidores;
  //     this.estadoDescarga = true;
  //     this.putHTMLValuesServidores(peso1, peso2, peso3, peso4, tarifas);
  //     console.log(servidores);
  //     this.spinner.hide();
  //   }
  // }

















  //////////////////
  // public getServidor(cedula: HTMLInputElement) {
  //   if (this.validarCedula(cedula.value)) {
  //     this.spinner.show();
  //     this.servidorService.getServidor(cedula.value).subscribe(servidor => {
  //       this.servidor = servidor;
  //       var textoCautividadDistancia = this.stringifyValuesTarifario(servidor.facCautividad, servidor.facDistancia);
  //       this.putHTMLValuesTarifario(servidor, textoCautividadDistancia[0], textoCautividadDistancia[1]);
  //       console.log(servidor, textoCautividadDistancia[0], textoCautividadDistancia[1]);
  //       console.log(textoCautividadDistancia[0], textoCautividadDistancia[1]);
  //       this.spinner.hide();
  //     }, error => {
  //       this.spinner.hide();
  //       alert('Estamos teniendo problemas de conexión a nuestros servidores, intenta recargar la página.');
  //     });
  //   } else {
  //     (<HTMLInputElement>document.getElementById('__ci')).value = '';
  //     alert("Ingrese una cédula o pasaporte valido");
  //   }
  // }
  // public validarCedula(cedula: string) {
  //   // Url autor: https://gist.github.com/vickoman/7800717
  //   // https://github.com/adrianeguez/ValidarCedulaEcuadorTypescript/blob/master/validar-cedula.ts
  //   if (cedula.length === 10) {
  //     const digitoRegion = cedula.substring(0, 2);
  //     if (digitoRegion >= String(0) && digitoRegion <= String(24)) {
  //       const ultimoDigito = Number(cedula.substring(9, 10));
  //       const pares = Number(cedula.substring(1, 2)) + Number(cedula.substring(3, 4)) + Number(cedula.substring(5, 6)) + Number(cedula.substring(7, 8));
  //       let numeroUno: any = cedula.substring(0, 1);
  //       numeroUno = (numeroUno * 2);
  //       if (numeroUno > 9) {
  //         numeroUno = (numeroUno - 9);
  //       }
  //       let numeroTres: any = cedula.substring(2, 3);
  //       numeroTres = (numeroTres * 2);
  //       if (numeroTres > 9) {
  //         numeroTres = (numeroTres - 9);
  //       }
  //       let numeroCinco: any = cedula.substring(4, 5);
  //       numeroCinco = (numeroCinco * 2);
  //       if (numeroCinco > 9) {
  //         numeroCinco = (numeroCinco - 9);
  //       }
  //       let numeroSiete: any = cedula.substring(6, 7);
  //       numeroSiete = (numeroSiete * 2);
  //       if (numeroSiete > 9) {
  //         numeroSiete = (numeroSiete - 9);
  //       }
  //       let numeroNueve: any = cedula.substring(8, 9);
  //       numeroNueve = (numeroNueve * 2);
  //       if (numeroNueve > 9) {
  //         numeroNueve = (numeroNueve - 9);
  //       }
  //       const impares = numeroUno + numeroTres + numeroCinco + numeroSiete + numeroNueve;
  //       const sumaTotal = (pares + impares);
  //       const primerDigitoSuma = String(sumaTotal).substring(0, 1);
  //       const decena = (Number(primerDigitoSuma) + 1) * 10;
  //       let digitoValidador = decena - sumaTotal;
  //       if (digitoValidador === 10) {
  //         digitoValidador = 0;
  //       }
  //       if (digitoValidador === ultimoDigito) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return false;
  //   }
  // }
  // public stringifyValuesTarifario(cautividadValor: string, distanciaValor: string) {
  //   var cautividadTexto = "";
  //   var cautividadValor = cautividadValor;
  //   if (cautividadValor == "0.1") {
  //     cautividadTexto = "Tiempo de viaje de 0 a 11 minutos";
  //   }
  //   if (cautividadValor == "0.075") {
  //     cautividadTexto = "Tiempo de viaje de 11 a 22 minutos";
  //   }
  //   if (cautividadValor == "0.05") {
  //     cautividadTexto = "Tiempo de viaje de 22 a 33 minutos";
  //   }
  //   if (cautividadValor == "0.025") {
  //     cautividadTexto = "Tiempo de viaje de 33 a 44 minutos";
  //   }
  //   if (cautividadValor == "0.0") {
  //     cautividadTexto = "Tiempo de viaje de 44 minutos en adelante";
  //   }
  //   if (cautividadValor == "-") {
  //     cautividadTexto = "Tiempo de viaje no estimado";
  //   }
  //   var distanciaTexto = "";
  //   var distanciaValor = distanciaValor;
  //   if (distanciaValor == "0.0") {
  //     distanciaTexto = "Distancia Residencia-Campus central mayor a 5 km, debido a la distancia no se mayora la tarifa.";
  //   }
  //   if (distanciaValor == "0.05") {
  //     distanciaTexto = "Distancia Residencia-Campus central entre 1 km y 5 km";
  //   }
  //   if (distanciaValor == "0.1") {
  //     distanciaTexto = "Distancia Residencia-Campus central menor o igual a 1 km";
  //   }
  //   if (distanciaValor == "-") {
  //     distanciaTexto = "Distancia Residencia-Campus central no estimado";
  //   }
  //   return [cautividadTexto, distanciaTexto];
  // }
  // public putHTMLValuesTarifario(servidor: Servidor, textoCautividad: string, textoDistancia: string) {
  //   if (servidor.cedula == "Usuario no registrado") {
  //     document.getElementById("erroresDatosEmpleado").innerHTML = "El número de cédula no consta en las bases de datos de docentes y empleados.";
  //     document.getElementById("usuarioEncontrado").innerHTML = "";

  //     document.getElementById("factorDistanciaE").innerHTML = "-";
  //     document.getElementById("pesoDistanciaE").innerHTML = "-";
  //     document.getElementById("factorCautividadE").innerHTML = "-";
  //     document.getElementById("pesoCautividadE").innerHTML = "-";
  //     document.getElementById("factorTitularidadE").innerHTML = "-";
  //     document.getElementById("pesoTitularidadE").innerHTML = "-";
  //     document.getElementById("factorDedicacionE").innerHTML = "-";
  //     document.getElementById("pesoDedicacionE").innerHTML = "-";
  //     document.getElementById("tarifaDiferencialE").innerHTML = "-";

  //     document.getElementById("cedulaUsuarioE").innerHTML = "-";
  //     document.getElementById("nombreUsuarioE").innerHTML = "-";
  //     document.getElementById("dependenciaE").innerHTML = "-";
  //     document.getElementById("servidorE").innerHTML = "-";
  //     document.getElementById("titularidadE").innerHTML = "-";
  //     document.getElementById("jornadaE").innerHTML = "-";
  //     document.getElementById("residenciaE").innerHTML = "-";
  //     document.getElementById("cautividadE").innerHTML = "-";
  //     (<HTMLInputElement>document.getElementById('__ci')).value = '';
  //   } else {
  //     if (servidor.facDistancia == "-" || servidor.facCautividad == "-") {
  //       document.getElementById("erroresDatosEmpleado").innerHTML = "Usuario existente, sus datos de residencia no constan en la base de datos. Actualice sus datos en DTICs.";
  //       document.getElementById("usuarioEncontrado").innerHTML = "";
  //     } else {
  //       document.getElementById("erroresDatosEmpleado").innerHTML = "";
  //       document.getElementById("usuarioEncontrado").innerHTML = "Usuario existente";
  //     }
  //     document.getElementById("factorDistanciaE").innerHTML = " " + servidor.facDistancia;
  //     document.getElementById("pesoDistanciaE").innerHTML = " " + servidor.pesoDistancia;
  //     document.getElementById("factorCautividadE").innerHTML = " " + servidor.facCautividad;
  //     document.getElementById("pesoCautividadE").innerHTML = " " + servidor.pesoCautividad;
  //     document.getElementById("factorTitularidadE").innerHTML = " " + servidor.facTitularidad;
  //     document.getElementById("pesoTitularidadE").innerHTML = " " + servidor.pesoTitularidad;
  //     document.getElementById("factorDedicacionE").innerHTML = " " + servidor.facDedicacion;
  //     document.getElementById("pesoDedicacionE").innerHTML = " " + servidor.pesoDedicacion;
  //     document.getElementById("tarifaDiferencialE").innerHTML = " " + servidor.tarifa;

  //     document.getElementById("cedulaUsuarioE").innerHTML = " " + servidor.cedula;
  //     document.getElementById("nombreUsuarioE").innerHTML = " " + servidor.nombres;
  //     document.getElementById("dependenciaE").innerHTML = " " + servidor.depedencia;
  //     document.getElementById("servidorE").innerHTML = " " + servidor.tipoServidor;
  //     document.getElementById("titularidadE").innerHTML = " " + servidor.titularidad;
  //     document.getElementById("jornadaE").innerHTML = " " + servidor.dedicacion;
  //     document.getElementById("residenciaE").innerHTML = " " + textoDistancia;
  //     document.getElementById("cautividadE").innerHTML = " " + textoCautividad;
  //     (<HTMLInputElement>document.getElementById('__ci')).value = '';
  //   }
  // }
}

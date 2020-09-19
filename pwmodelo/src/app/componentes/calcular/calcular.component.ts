import { Component, OnInit } from '@angular/core';
import { ServidoresService } from 'src/app/servicios/servidores.service';
import { Servidores } from 'src/app/modelos/servidores/servidores.model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent implements OnInit {
  estadoDescarga = false;
  public servidores: Servidores[];
  pageActual: number = 1;
  constructor(private servidoresService: ServidoresService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }
  public getAllServidor(peso1: HTMLInputElement, peso2: HTMLInputElement, peso3: HTMLInputElement, peso4: HTMLInputElement) {
    if (this.validacionInputValues(peso1, peso2, peso3, peso4)) {
      this.spinner.show();
      this.servidoresService.getAllServidores(peso1.value, peso2.value, peso3.value, peso4.value).subscribe(servidores => {
        var tarifas = servidores[servidores.length - 1];
        servidores.splice(servidores.length - 1, 1);
        this.servidores = servidores;
        this.estadoDescarga = true;
        this.putHTMLValuesServidores(peso1, peso2, peso3, peso4, tarifas);
        console.log(servidores);
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        alert('Estamos teniendo problemas de conexión a nuestros servidores, intenta recargar la página.');
        (<HTMLInputElement>document.getElementById('__peso1')).value = '';
        (<HTMLInputElement>document.getElementById('__peso2')).value = '';
        (<HTMLInputElement>document.getElementById('__peso3')).value = '';
        (<HTMLInputElement>document.getElementById('__peso4')).value = '';
      });
    } else {
      (<HTMLInputElement>document.getElementById('__peso1')).value = '';
      (<HTMLInputElement>document.getElementById('__peso2')).value = '';
      (<HTMLInputElement>document.getElementById('__peso3')).value = '';
      (<HTMLInputElement>document.getElementById('__peso4')).value = '';
      alert("Los pesos deben tener valores iguales o mayores a 0");
    }
    return false;
  }
  public validacionInputValues(peso1: HTMLInputElement, peso2: HTMLInputElement, peso3: HTMLInputElement, peso4: HTMLInputElement) {
    var _peso1 = parseFloat(peso1.value);
    var _peso2 = parseFloat(peso2.value);
    var _peso3 = parseFloat(peso3.value);
    var _peso4 = parseFloat(peso4.value);
    if (Number.isNaN(_peso1) || Number.isNaN(_peso2) || Number.isNaN(_peso3) || Number.isNaN(_peso4)) {
      return false;
    } else {
      return true;
    }
  }
  public putHTMLValuesServidores(peso1: HTMLInputElement, peso2: HTMLInputElement, peso3: HTMLInputElement, peso4: HTMLInputElement, tarifas: Servidores) {
    document.getElementById("pdistancia").innerHTML = peso1.value;
    document.getElementById("pcautividad").innerHTML = peso2.value;
    document.getElementById("pdedicacion").innerHTML = peso3.value;
    document.getElementById("ptitularidad").innerHTML = peso4.value;

    document.getElementById("tminima").innerHTML = parseFloat(tarifas.facDistacancia).toFixed(2).toString();
    document.getElementById("tmaxima").innerHTML = parseFloat(tarifas.facCautividad).toFixed(2).toString();
    document.getElementById("tpromedio").innerHTML = parseFloat(tarifas.facDedicacion).toFixed(2).toString();

    (<HTMLInputElement>document.getElementById('__peso1')).value = '';
    (<HTMLInputElement>document.getElementById('__peso2')).value = '';
    (<HTMLInputElement>document.getElementById('__peso3')).value = '';
    (<HTMLInputElement>document.getElementById('__peso4')).value = '';
  }
}











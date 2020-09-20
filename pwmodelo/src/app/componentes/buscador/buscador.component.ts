import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/servicios/pacientes.service';
import { Paciente } from 'src/app/modelos/paciente/paciente.model';
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  public pacientes: Paciente[];
  divTabla: boolean = true;
  btnAgregarngIf: boolean = true;
  divAdd: boolean = false;
  divEdit: boolean = false;
  formEdit: FormGroup;
  formAdd: FormGroup;

  doctores = [
    { id: '1', nombre: 'Dr. Luis Ávila Carrera' },
    { id: '2', nombre: 'Dr. Carlos Correa' },
    { id: '3', nombre: 'Dra. Saida Correa Acosta' },
    { id: '4', nombre: 'Dra. Patricia Díaz' },
    { id: '5', nombre: 'Dr. Josefa Acosta' },
    { id: '6', nombre: 'Dra. Martina Espinoza' },
  ]
  constructor(private pacienteService: PacienteService, private spinner: NgxSpinnerService, private _formbuilder: FormBuilder) {
    this.formEdit = this._formbuilder.group({
      iptEditId: [''],
      iptEditNombres: [''],
      iptEditDireccion: [''],
      iptEditTelefono: [''],
      selectListEditDrs: [this.doctores[0]]
    });
    this.formAdd = this._formbuilder.group({
      iptAddNombres: [''],
      iptAddDireccion: [''],
      iptAddTelefono: [''],
      selectListAddDrs: [this.doctores[0]]
    });
  }
  ngOnInit() {
    this.divTabla = true;
    this.btnAgregarngIf = true;
    this.divAdd = false;
    this.divEdit = false;
    
    this.getPacientes();
  }
  public openAddPaciente() {
    this.divTabla = false;
    this.divAdd = true;
    this.divEdit = false;
    this.btnAgregarngIf = false;
  }
  
  public buscarJson(llave: string) {
    var index = this.doctores.map(function (doctoresJson) { return doctoresJson['id']; }).indexOf(llave);
    return index;
  }
  public openUpdatePanel(_id: String, _nombre: String, _id_doctor: String, _telefono: String, _direccion: String) {
    this.divTabla = false;
    this.btnAgregarngIf = false;
    this.divAdd = false;
    this.divEdit = true;
    var id = _id.toString();
    var nombres = _nombre.toString();
    var direccion = _direccion.toString();
    var telefono = _telefono.toString();
    var indexDoctor = this.buscarJson(_id_doctor.toString());
    this.formEdit.setValue({
      iptEditId: id,
      iptEditNombres: nombres,
      iptEditDireccion: direccion,
      iptEditTelefono: telefono,
      selectListEditDrs: this.doctores[indexDoctor]
    });

  }
  public saveNewPaciente() {
    var nombreAdd = this.formAdd.get('iptAddNombres').value;
    var direccionAdd = this.formAdd.get('iptAddDireccion').value;
    var telefonoAdd = this.formAdd.get('iptAddTelefono').value;

    var pacienteN = new Paciente();
    pacienteN.setValuesInstanceUpdate(nombreAdd, "1", telefonoAdd, direccionAdd);
    this.pacienteService.postPaciente(pacienteN).subscribe(
      response => {
        alert("Paciente Agregado Exitosamente");
        window.location.reload();
      },
      err => {
        alert("Lo sentimos, ocurrió un error :(, vuelve a intentarlo");
        window.location.reload();
      }
    );
  }
  public updateChangeForm() {
    var idEdit = this.formEdit.get('iptEditId').value;
    var nombreEdit = this.formEdit.get('iptEditNombres').value;
    var direccionEdit = this.formEdit.get('iptEditDireccion').value;
    var telefonoEdit = this.formEdit.get('iptEditTelefono').value;
    // TODO GET VALUE OF SELECT LIST
    // this.paciente.setValuesInstanceUpdate(temp1,"1",temp4,temp3);

    if (nombreEdit.length == 0 || direccionEdit.length == 0 || telefonoEdit.length == 0) {
      alert("Los campos no pueden estar vacios, por favor llenelos");
    } else {
      var pacienteE = {
        "id": idEdit,
        "id_doctor": "1",
        "nombre": nombreEdit,
        "telefono": telefonoEdit,
        "direccion": direccionEdit
      };
      this.pacienteService.putPaciente(idEdit, pacienteE).subscribe(
        response => {
          alert("Actualización Exitosa");
          window.location.reload();
        },
        err => {
          alert("Lo sentimos, ocurrió un error :(, vuelve a intentarlo");
          window.location.reload();
        }
      );
    }
    // falta get selected option
    // console.log(">>>>"+this.formEdit.get('selectListEditDrs'));
  }
  public deletePaciente(_id: string, nombreUsuario: string): void {
    var alerta = "Ud procedera a eliminar al Usuario " + nombreUsuario;
    if (confirm(alerta)) {
      this.pacienteService.eliminarPaciente(_id).subscribe(
        response => {
          alert("Eliminación Exitosa");
          window.location.reload();
        },
        err => {
          alert("Lo sentimos, ocurrió un error :(, vuelve a intentarlo");
          window.location.reload();
        }
      );
    }


  }
  public getPacientes(){
    this.pacienteService.getAllPacientes().subscribe(_pacientes => {
      this.pacientes = _pacientes;
      console.log(_pacientes);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Empleado } from '../../../Models/empleado';
import { EmpleadoService } from '../../../Services/empleado.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.css']
})
export class RegistroEmpleadoComponent implements OnInit {
  formGroup: FormGroup;
  empleado: Empleado;
  constructor(private empleadoService : EmpleadoService, private formbuilder : FormBuilder,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.buildform();
  }

  private buildform(){
    this.empleado = new Empleado();
    this.empleado.cedula = '';
    this.empleado.nombre = '';
    this.empleado.edad = null;
    this.empleado.sexo = '';
    this.empleado.telefono = null;
    this.empleado.correo = '';
    this.empleado.direccion = '';
    this.empleado.cargo = '';
    this.empleado.horario = '';

    this.formGroup = this.formbuilder.group({
      cedula   :[this.empleado.cedula, Validators.required],
      nombre   :[this.empleado.nombre, Validators.required],
      edad     :[this.empleado.edad,Validators.required],
      sexo     :[this.empleado.sexo,Validators.required],
      telefono :[this.empleado.telefono,Validators.required],
      correo   :[this.empleado.correo,Validators.required],
      direccion:[this.empleado.direccion,Validators.required],
      cargo    :[this.empleado.cargo,Validators.required],
      horario  :[this.empleado.horario,Validators.required],
    });
  }

  get control(){
    return this.formGroup.controls;
  }

  onReset(){
    this.formGroup.reset();
  }

  onSave(){
    if(this.formGroup.invalid){
      return;
    }
    this.add();
 
  }

  add(){
    this.empleado = this.formGroup.value;
    console.log(this.empleado);
    this.empleadoService.post(this.empleado).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.type = 'success';
        menssageBox.componentInstance.message = 'Empleado registrado Correctamente';
        this.empleado = p;
      }
    });
    this.onReset();
  }

}

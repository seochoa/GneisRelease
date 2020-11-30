import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Empleado } from 'src/app/Models/empleado';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpleadoService } from '../../../Services/empleado.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-actualiza-empleado',
  templateUrl: './actualiza-empleado.component.html',
  styleUrls: ['./actualiza-empleado.component.css']
})
export class ActualizaEmpleadoComponent implements OnInit {
  formGroup: FormGroup;
  @Input() empleadoviejo: Empleado;
  empleado: Empleado;
  constructor(public activeModal: NgbActiveModal,private empleadoService : EmpleadoService, private formbuilder : FormBuilder,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.buildform();
  }

  private buildform(){
    this.empleado = new Empleado();
    this.empleado.nombre = this.empleadoviejo.nombre;
    this.empleado.edad = this.empleadoviejo.edad;
    this.empleado.sexo = this.empleadoviejo.sexo;
    this.empleado.telefono = this.empleadoviejo.telefono;
    this.empleado.correo = this.empleadoviejo.correo;
    this.empleado.direccion = this.empleadoviejo.direccion;
    this.empleado.cargo = this.empleadoviejo.cargo;
    this.empleado.horario = this.empleadoviejo.horario;

    this.formGroup = this.formbuilder.group({
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

  onUpdate(){
    if(this.formGroup.invalid){
      return;
    }
    this.Update();
 
  }

  Update(){
    
    this.empleado = this.formGroup.value;
    this.empleado.cedula = this.empleadoviejo.cedula;
    console.log(this.empleado);
     this.empleadoService.update(this.empleado).subscribe(p=>{
       const menssageBox = this.modalService.open(AlertModalComponent)
       menssageBox.componentInstance.type = "success";
       menssageBox.componentInstance.message = 'Empleado Modificado Correctamente';
       this.activeModal.close();
     });
  }

}

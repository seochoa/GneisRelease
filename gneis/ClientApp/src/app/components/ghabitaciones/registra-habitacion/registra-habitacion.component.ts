import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Habitacion } from '../../../Models/habitacion';
import { HabitacionService } from '../../../Services/habitacion.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';


@Component({
  selector: 'app-registra-habitacion',
  templateUrl: './registra-habitacion.component.html',
  styleUrls: ['./registra-habitacion.component.css']
})
export class RegistraHabitacionComponent implements OnInit {

  formGroup: FormGroup;
  habitacion : Habitacion;

  constructor(private habitacionService : HabitacionService,private formbuilder : FormBuilder,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.buildform();
  }

  private buildform(){
    this.habitacion = new Habitacion();
    this.habitacion.idhabitacion = '';
    this.habitacion.tipo = '';
    this.habitacion.costo = 0;

    this.formGroup = this.formbuilder.group({
      idhabitacion   :[this.habitacion.idhabitacion, Validators.required],
      tipo           :[this.habitacion.tipo, Validators.required],
      costo          :[this.habitacion.costo,Validators.required],
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
    this.habitacion = this.formGroup.value;
    this.habitacion.estado = 'Disponible';
    this.habitacion.usos = 0;
    console.log(this.habitacion);
    this.habitacionService.post(this.habitacion).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.type = 'success';
        menssageBox.componentInstance.message = 'Habitacion registrada Correctamente';
         this.habitacion = p;
       }
    });
    this.onReset();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HabitacionService } from '../../../Services/habitacion.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';
import { Habitacion } from 'src/app/Models/habitacion';

@Component({
  selector: 'app-actualiza-habitacion',
  templateUrl: './actualiza-habitacion.component.html',
  styleUrls: ['./actualiza-habitacion.component.css']
})
export class ActualizaHabitacionComponent implements OnInit {
  formGroup: FormGroup;
  @Input() habitacionvieja: Habitacion;
  habitacion: Habitacion;
  constructor(public activeModal: NgbActiveModal,private habitacionService : HabitacionService, private formbuilder : FormBuilder,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.buildform();
  }

  private buildform(){
    this.habitacion = new Habitacion();
    this.habitacion.tipo = this.habitacionvieja.tipo;
    this.habitacion.costo = this.habitacionvieja.costo;

    this.formGroup = this.formbuilder.group({
      tipo           :[this.habitacion.tipo, Validators.required],
      costo          :[this.habitacion.costo,Validators.required],
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
    
    this.habitacion = this.formGroup.value;
    this.habitacion.idhabitacion = this.habitacionvieja.idhabitacion;
    this.habitacion.estado = this.habitacionvieja.estado;
    this.habitacion.usos = this.habitacionvieja.usos;
     this.habitacionService.update(this.habitacion).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.type = "success";
        menssageBox.componentInstance.message = 'Habitacion Modificada Correctamente';
        this.activeModal.close();
      }  
     });
  }


}

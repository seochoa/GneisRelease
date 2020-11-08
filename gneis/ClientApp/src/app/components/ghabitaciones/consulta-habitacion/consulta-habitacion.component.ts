import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Habitacion } from 'src/app/Models/habitacion';
import { HabitacionService } from '../../../Services/habitacion.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';
import { ActualizaHabitacionComponent } from '../actualiza-habitacion/actualiza-habitacion.component';

@Component({
  selector: 'app-consulta-habitacion',
  templateUrl: './consulta-habitacion.component.html',
  styleUrls: ['./consulta-habitacion.component.css']
})
export class ConsultaHabitacionComponent implements OnInit {
  searchhabitacion: string;
  habitaciones : Habitacion[];
  constructor(private habitacionService : HabitacionService,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.habitacionService.gets().subscribe(result =>{
      this.habitaciones = result;
    });
  }

  eliminar(idhabitacion: string){
    this.habitacionService.delete(idhabitacion).subscribe(mensaje =>{
      const menssageBox = this.modalService.open(AlertModalComponent)
      menssageBox.componentInstance.type = 'danger';
      menssageBox.componentInstance.message = 'Habitacion Eliminada Correctamente';
      this.consultar();
    });
  }

  actualizar(habitacion: Habitacion){
    const menssageBox = this.modalService.open(ActualizaHabitacionComponent)
    menssageBox.componentInstance.habitacionvieja = habitacion;
    this.ngOnInit();
  }

}

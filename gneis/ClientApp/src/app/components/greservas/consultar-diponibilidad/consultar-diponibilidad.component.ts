import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../../Models/habitacion';
import { HabitacionService } from '../../../Services/habitacion.service';
import { Reserva } from '../../../Models/reserva';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistraReservaComponent } from '../registra-reserva/registra-reserva.component';

@Component({
  selector: 'app-consultar-diponibilidad',
  templateUrl: './consultar-diponibilidad.component.html',
  styleUrls: ['./consultar-diponibilidad.component.css']
})
export class ConsultarDiponibilidadComponent implements OnInit {
  searchhabitacion: string;
  habitaciones : Habitacion[];
  habitacionesfiltradas: Habitacion[]=[];
  Estado : string = "Disponible";
  constructor(private habitacionService : HabitacionService,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.habitacionService.gets().subscribe(result =>{
      this.habitaciones = result;
      for(let room of this.habitaciones){
        if(room.estado === 'Disponible'){
          this.habitacionesfiltradas.push(room);
          console.log(this.habitacionesfiltradas);
        }
      }
    });
  }

  Reservar(habitacion: Habitacion){
    const menssageBox = this.modalService.open(RegistraReservaComponent)
    menssageBox.componentInstance.habitacion = habitacion;
    
  }

}

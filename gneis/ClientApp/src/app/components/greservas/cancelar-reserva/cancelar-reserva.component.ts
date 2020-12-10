import { Component, Input, OnInit } from '@angular/core';
import { Reserva } from '../../../Models/reserva';
import { Habitacion } from '../../../Models/habitacion';
import { Cliente } from '../../../Models/cliente';
import { ClienteService } from '../../../Services/cliente.service';
import { HabitacionService } from '../../../Services/habitacion.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';
import { ReservaService } from '../../../Services/reserva.service';

@Component({
  selector: 'app-cancelar-reserva',
  templateUrl: './cancelar-reserva.component.html',
  styleUrls: ['./cancelar-reserva.component.css']
})
export class CancelarReservaComponent implements OnInit {
  @Input() reservamostrar: Reserva;
  habitacion : Habitacion;
  cliente: Cliente;
  
  constructor(private reservaService : ReservaService,private clienteService : ClienteService,private habitacionService : HabitacionService,public activeModal: NgbActiveModal,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.habitacionService.get(this.reservamostrar.idhabitacion).subscribe(result =>{
      this.habitacion = result;
      console.log(this.habitacion)
    });
  }

  
  

  eliminar(){
    
    this.habitacion.estado = 'Disponible';
    console.log(this.habitacion)
    this.habitacionService.update(this.habitacion).subscribe(p=>{
      if(p!=null){
        console.log("habitacion update")
      }  
     });

    this.reservaService.delete(this.reservamostrar.idreserva).subscribe(p =>{
      const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.type = 'success';
        menssageBox.componentInstance.message = 'Reserva Cancelada Correctamente';
        this.activeModal.close();  
    });
   }

}

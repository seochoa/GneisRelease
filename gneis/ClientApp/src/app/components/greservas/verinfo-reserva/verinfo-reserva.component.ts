import { Component, Input, OnInit } from '@angular/core';
import { Reserva } from '../../../Models/reserva';
import { Habitacion } from '../../../Models/habitacion';
import { Cliente } from '../../../Models/cliente';
import { ClienteService } from '../../../Services/cliente.service';
import { HabitacionService } from '../../../Services/habitacion.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-verinfo-reserva',
  templateUrl: './verinfo-reserva.component.html',
  styleUrls: ['./verinfo-reserva.component.css']
})
export class VerinfoReservaComponent implements OnInit {
  @Input() reservamostrar: Reserva;
  habitacion : Habitacion;
  cliente: Cliente;
  constructor(private clienteService : ClienteService,private habitacionService : HabitacionService,public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    
    this.consultar();
  }

  consultar(){
    this.clienteService.get(this.reservamostrar.idcliente).subscribe(result =>{
      this.cliente = result;
      console.log(result)
    });

    this.habitacionService.get(this.reservamostrar.idhabitacion).subscribe(result =>{
      this.habitacion = result;
      console.log(result)
    });

    
  }

  

}

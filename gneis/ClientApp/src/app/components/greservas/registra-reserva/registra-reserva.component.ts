import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../../Models/habitacion';
import { HabitacionService } from '../../../Services/habitacion.service';
import { Reserva } from '../../../Models/reserva';
import { Cliente } from '../../../Models/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from '../../../Services/cliente.service';
import { ReservaService } from '../../../Services/reserva.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-registra-reserva',
  templateUrl: './registra-reserva.component.html',
  styleUrls: ['./registra-reserva.component.css']
})
export class RegistraReservaComponent implements OnInit {

  habitaciones: Habitacion[];
  habitacionesfiltradas: Habitacion[]=[];
  habitacion: Habitacion;
  Estado : string;
  idhabitacion: string;
  reserva: Reserva;
  cliente: Cliente;
  formGroupreserva: FormGroup;
  formGroupcliente: FormGroup;

  constructor(
    private habitacionService: HabitacionService,
    private formbuilder : FormBuilder,private modalService : NgbModal,
    private clienteService: ClienteService,
    private reservaService:ReservaService) { }

  ngOnInit(): void {
    this.Estado = 'Disponible';
    this.consultar();
    this.buildform();
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

  private buildform(){
    this.cliente = new Cliente();
    this.cliente.cedula = '';
    this.cliente.nombre = '';
    this.cliente.edad = null;
    this.cliente.sexo = '';
    this.cliente.telefono = null;
    this.cliente.correo = '';
    this.cliente.direccion = '';

    this.formGroupcliente = this.formbuilder.group({
      cedula       :[this.cliente.cedula, Validators.required],
      nombre       :[this.cliente.nombre, Validators.required],
      edad         :[this.cliente.edad,Validators.required],
      sexo         :[this.cliente.sexo,Validators.required],
      telefono     :[this.cliente.telefono,Validators.required],
      correo       :[this.cliente.correo,Validators.required],
      direccion    :[this.cliente.direccion,Validators.required],
    });

    this.reserva = new Reserva();
    this.reserva.idreserva = '';
    this.reserva.numeroinvitados = null;
    this.reserva.fechareserva = null;

    this.formGroupreserva = this.formbuilder.group({
      idreserva       :[this.reserva.idreserva, Validators.required],
      numeroinvitados :[this.reserva.numeroinvitados, Validators.required],
      fechareserva    :[this.reserva.fechareserva,Validators.required],
    });  
  }

  get control(){
    return this.formGroupcliente.controls;
  }

  get control2(){
    return this.formGroupreserva.controls;
  }

  onReset(){
    this.formGroupcliente.reset();
    this.formGroupreserva.reset();
  }

  onSave(){
    if(this.formGroupcliente.invalid){
      return;
    }
    
    this.agregar();
  }

  agregar(){
    this.cliente = this.formGroupcliente.value;
    this.reserva = this.formGroupreserva.value;
    
    console.log(this.cliente);
    
    for(let room of this.habitaciones){
      if(this.idhabitacion === room.idhabitacion){
        
        this.habitacion = new Habitacion();
        this.habitacion = room;
        this.habitacion.estado = 'Reservada';
        console.log(this.habitacion);
      }
    }
    this.reserva.idcliente = this.cliente.cedula;
    this.reserva.idhabitacion = this.habitacion.idhabitacion;
    console.log(this.reserva);

    this.clienteService.post(this.cliente).subscribe(p=>{
      if(p!=null){
         this.cliente = p;
       }
    });

    this.reservaService.post(this.reserva).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.type = 'success';
        menssageBox.componentInstance.message = 'Reserva registrada Correctamente';
        this.consultar();
         this.reserva = p;
       }
    });

     this.habitacionService.update(this.habitacion).subscribe(p=>{
       console.log(p)
     });


    this.onReset();

  }

 

  

}

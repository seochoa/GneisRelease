import { Component, Input, OnInit } from '@angular/core';
import { Habitacion } from '../../../Models/habitacion';
import { HabitacionService } from '../../../Services/habitacion.service';
import { Reserva } from '../../../Models/reserva';
import { Cliente } from '../../../Models/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from '../../../Services/cliente.service';
import { ReservaService } from '../../../Services/reserva.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-registra-reserva',
  templateUrl: './registra-reserva.component.html',
  styleUrls: ['./registra-reserva.component.css']
})
export class RegistraReservaComponent implements OnInit {
  clients : Cliente[];
  habitaciones: Habitacion[];
  @Input() habitacion: Habitacion;
  Estado : string;
  idhabitacion: string;
  reserva: Reserva;
  cliente: Cliente;
  formGroupreserva: FormGroup;
  formGroupcliente: FormGroup;
  searchcliente : string;
  clientebuscado: Cliente;
 

  constructor(
    private habitacionService: HabitacionService,
    private formbuilder : FormBuilder,
    private modalService : NgbModal,
    private clienteService: ClienteService,
    private reservaService:ReservaService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.clienteService.gets().subscribe(result =>{
      this.clients = result;
    });
    
    this.Estado = 'Disponible';
    this.buildform();
  }

  buscarcliente(){
    this.clientebuscado = null;
    console.log(this.clients);
    console.log(this.searchcliente);
    for(let clie of this.clients){
      if(clie.cedula == this.searchcliente){
        this.clientebuscado = clie;
      }
    }
   console.log(this.clientebuscado)
   if(this.clientebuscado != null){
      const menssageBox = this.modalService.open(AlertModalComponent)
      menssageBox.componentInstance.type = 'success';
      menssageBox.componentInstance.message = 'El Cliente ya se encuentra registrado en nuestra base de datos por favor solo ingrese los datos de la reserva';
    }
    else{
      const menssageBox = this.modalService.open(AlertModalComponent)
      menssageBox.componentInstance.type = 'success';
      menssageBox.componentInstance.message = 'El Cliente no se encuentra registrado en nuestra base de datos por favor haga el debido registro de este';
    }
    this.buildform();
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
    this.reserva.numeroinvitados = null;
    this.reserva.fechareserva = null;

    this.formGroupreserva = this.formbuilder.group({

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
    this.cliente = this.formGroupcliente.value;
    this.cliente.hospedajes = 0;
    this.reserva = this.formGroupreserva.value;
    this.reserva.idcliente = this.cliente.cedula;
    this.reserva.idhabitacion = this.habitacion.idhabitacion;
    this.reserva.idreserva = 'Rerserva' + this.habitacion.idhabitacion;
    this.habitacion.estado = 'Reservada';
    console.log(this.cliente);
    console.log(this.reserva);
    console.log(this.habitacion);
    this.agregarcliente();
    this.agregar();
    
  }

  onSave2(){
    if(this.formGroupreserva.invalid){
      return;
    }
    this.reserva = this.formGroupreserva.value;
    this.reserva.idhabitacion = this.habitacion.idhabitacion;
    this.reserva.idcliente = this.clientebuscado.cedula;
    this.reserva.idreserva = 'Rerserva' + this.habitacion.idhabitacion;
    this.habitacion.estado = 'Reservada';
    this.agregar();
  }

  agregarcliente(){
    this.clienteService.post(this.cliente).subscribe(p=>{
      if(p!=null){
         this.cliente = p;
       }
    });
  }

  agregar(){
    
    this.reservaService.post(this.reserva).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.type = 'success';
        menssageBox.componentInstance.message = 'Reserva registrada Correctamente';
        this.activeModal.close();
         this.reserva = p;
       }
    });

    this.habitacionService.update(this.habitacion).subscribe(p=>{
      console.log(p)
    });
     
     

  }

 

  

}

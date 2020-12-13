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
import { Checkin } from '../../../Models/checkin';
import { CheckinService } from '../../../Services/checkin.service';

@Component({
  selector: 'app-registro-entrada',
  templateUrl: './registro-entrada.component.html',
  styleUrls: ['./registro-entrada.component.css']
})
export class RegistroEntradaComponent implements OnInit {
  @Input() reserva: Reserva;
  checkin : Checkin;
  cliente : Cliente;
  habitacion : Habitacion;
  formGroupcheckin: FormGroup;
  clients : Cliente[] = [];
  habitaciones: Habitacion[] = [];

  constructor(private habitacionService: HabitacionService,
    private formbuilder : FormBuilder,
    private modalService : NgbModal,
    private clienteService: ClienteService,
    private reservaService:ReservaService,
    public activeModal: NgbActiveModal,
    private checkinService : CheckinService) { }

  ngOnInit(): void {
    this.habitacionService.get(this.reserva.idhabitacion).subscribe(result =>{
      this.habitacion = result;
      
    });

    this.clienteService.get(this.reserva.idcliente).subscribe(result =>{
      this.cliente = result; 
    });
    this.buildform();
  }
  private buildform(){
    this.checkin = new Checkin();
    this.checkin.fechaentrada = null;

    this.formGroupcheckin = this.formbuilder.group({
      fechaentrada   :[this.checkin.fechaentrada,Validators.required],
    });
  }

  get control2(){
    return this.formGroupcheckin.controls;
  }

  onSave(){
    if(this.formGroupcheckin.invalid){
      return;
    }
    this.checkin = this.formGroupcheckin.value;
    this.checkin.idcheckin = 'CHKIN' + this.habitacion.idhabitacion;
    this.checkin.idhabitacion = this.habitacion.idhabitacion;
    this.checkin.idcliente = this.cliente.cedula;
    this.checkin.numeroinvitados = this.reserva.numeroinvitados;
    this.habitacion.estado = 'Ocupada'
    this.habitacion.usos +=1;

    this.cliente.hospedajes+=1;
    console.log(this.checkin)
    console.log(this.habitacion)
    console.log(this.cliente)
    this.agregar();
    this.actualizarinformacion();
    this.eliminarreserva();
  }

  actualizarinformacion(){
    this.habitacionService.update(this.habitacion).subscribe(p=>{
      console.log(p)
    });
    this.clienteService.update(this.cliente).subscribe(p=>{
      console.log(p)
    });
  }

  eliminarreserva(){
    this.reservaService.delete(this.reserva.idreserva).subscribe(p =>{
    });
  }

  agregar(){
    this.checkinService.post(this.checkin).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.type = 'success';
        menssageBox.componentInstance.message = 'Registro de Entrada Procesada Correctamente';
        this.activeModal.close();
         this.checkin = p;
       }
    });
  }

  

  

}

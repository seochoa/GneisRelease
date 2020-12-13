import { Component, Input, OnInit } from '@angular/core';
import { Checkout } from '../../../Models/checkout';
import { Cliente } from '../../../Models/cliente';
import { Habitacion } from '../../../Models/habitacion';
import { CheckoutService } from '../../../Services/checkout.service';
import { HabitacionService } from '../../../Services/habitacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from '../../../Services/cliente.service';
import { CheckinService } from '../../../Services/checkin.service';
import { Checkin } from '../../../Models/checkin';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-registrocheckout',
  templateUrl: './registrocheckout.component.html',
  styleUrls: ['./registrocheckout.component.css']
})
export class RegistrocheckoutComponent implements OnInit {
  @Input() checkin: Checkin;
  checkout : Checkout;
  cliente : Cliente;
  habitacion : Habitacion;
  formGroupcheckout: FormGroup;

  constructor(private habitacionService: HabitacionService,
    private formbuilder : FormBuilder,
    private modalService : NgbModal,
    private clienteService: ClienteService,
    private checkoutService:CheckoutService,
    public activeModal: NgbActiveModal,
    private checkinService : CheckinService) { }

  ngOnInit(): void {
    this.habitacionService.get(this.checkin.idhabitacion).subscribe(result =>{
      this.habitacion = result;
      
    });

    this.clienteService.get(this.checkin.idcliente).subscribe(result =>{
      this.cliente = result;
      
    });
    this.buildform();
  }

  private buildform(){
    this.checkout = new Checkout();
    this.checkout.fechasalida = null;

    this.formGroupcheckout = this.formbuilder.group({
      fechasalida   :[this.checkout.fechasalida,Validators.required],
    });
  }

  get control2(){
    return this.formGroupcheckout.controls;
  }

  onSave(){
    if(this.formGroupcheckout.invalid){
      return;
    }
    var num = Math.floor((Math.random()) * 999) + 1;
    this.habitacion.estado = 'Disponible'
    this.checkout = this.formGroupcheckout.value;
    this.checkout.idcheckout = 'CHKOUT' + num;
    this.checkout.idcliente = this.cliente.cedula;
    this.checkout.idhabitacion = this.habitacion.idhabitacion;
    this.checkout.numeroinvitados = this.checkin.numeroinvitados;
    this.checkout.fechaentrada = this.checkin.fechaentrada;
    this.checkout.diasHospedaje = this.calculateDifference(this.parseDate(this.checkout.fechaentrada), this.parseDate(this.checkout.fechasalida));
    this.checkout.totalHospedaje = this.habitacion.costo * this.checkout.diasHospedaje;
    
    console.log(this.checkout);
    this.agregar();
    this.actualizarinformacion();
    this.eliminacheckin();
  }

  actualizarinformacion(){
    this.habitacionService.update(this.habitacion).subscribe(p=>{
      console.log(p)
    });
  }

  eliminacheckin(){
    this.checkinService.delete(this.checkin.idcheckin).subscribe(p =>{
    });
  }

  agregar(){
    this.checkoutService.post(this.checkout).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.type = 'success';
        menssageBox.componentInstance.message = 'Registro de Salida Procesada Correctamente';
        this.activeModal.close();
         this.checkout = p;
       }
    });
  }


  parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
  }

  calculateDifference (date1, date2){
    var timeDifference = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDifference / (1000 * 3600 * 24));//ms * seconds * hours
  }

}

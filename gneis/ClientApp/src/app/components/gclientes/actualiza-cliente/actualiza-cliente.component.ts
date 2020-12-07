import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../../Models/cliente';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from '../../../Services/cliente.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-actualiza-cliente',
  templateUrl: './actualiza-cliente.component.html',
  styleUrls: ['./actualiza-cliente.component.css']
})
export class ActualizaClienteComponent implements OnInit {
  formGroup: FormGroup;
  @Input() clienteviejo: Cliente;
  cliente: Cliente;
  constructor(public activeModal: NgbActiveModal,private clienteService: ClienteService, private formbuilder : FormBuilder,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.buildform();
  }

  private buildform(){
    this.cliente = new Cliente();
    this.cliente.nombre = this.clienteviejo.nombre;
    this.cliente.edad = this.clienteviejo.edad;
    this.cliente.sexo = this.clienteviejo.sexo;
    this.cliente.telefono = this.clienteviejo.telefono;
    this.cliente.correo = this.clienteviejo.correo;
    this.cliente.direccion = this.clienteviejo.direccion;


    this.formGroup = this.formbuilder.group({
      nombre   :[this.cliente.nombre, Validators.required],
      edad     :[this.cliente.edad,Validators.required],
      sexo     :[this.cliente.sexo,Validators.required],
      telefono :[this.cliente.telefono,Validators.required],
      correo   :[this.cliente.correo,Validators.required],
      direccion:[this.cliente.direccion,Validators.required],
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
    
    this.cliente = this.formGroup.value;
    this.cliente.cedula = this.clienteviejo.cedula;
    this.cliente.hospedajes = this.clienteviejo.hospedajes;
    console.log(this.cliente);
     this.clienteService.update(this.cliente).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.type = "success";
        menssageBox.componentInstance.message = 'Empleado Modificado Correctamente';
        this.activeModal.close();
      }
       
     });
  }

}

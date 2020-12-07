import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../Models/cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from '../../../Services/cliente.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  cliente: Cliente;
  formGroupcliente: FormGroup;
  constructor(private formbuilder : FormBuilder,private modalService : NgbModal,
    private clienteService: ClienteService,) { }

  ngOnInit(): void {
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
  }

  get control(){
    return this.formGroupcliente.controls;
  }

  onReset(){
    this.formGroupcliente.reset();
  }

  onSave(){
    if(this.formGroupcliente.invalid){
      return;
    }
    
    this.agregar();
  }

  agregar(){
    this.cliente = this.formGroupcliente.value;
    this.cliente.hospedajes = 0;
    this.clienteService.post(this.cliente).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.type = 'success';
        menssageBox.componentInstance.message = 'Cliente registrado Correctamente';
        this.onReset();
         this.cliente = p;
       }
    });
    
  }


}

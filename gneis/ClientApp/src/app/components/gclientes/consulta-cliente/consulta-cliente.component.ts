import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../Models/cliente';
import { ClienteService } from '../../../Services/cliente.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VerinfoClienteComponent } from '../verinfo-cliente/verinfo-cliente.component';
import { ActualizaClienteComponent } from '../actualiza-cliente/actualiza-cliente.component';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit {
  clientes : Cliente[];
  searchuser: string;
  constructor(private clienteService : ClienteService,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.clienteService.gets().subscribe(result =>{
      this.clientes = result;
      console.log(result);
    });
  }

  Verinfo(cliente: Cliente){
    const menssageBox = this.modalService.open(VerinfoClienteComponent);
    menssageBox.componentInstance.clientemostrar= cliente;
  }

  actualizar(cliente: Cliente){
    const menssageBox = this.modalService.open(ActualizaClienteComponent)
    menssageBox.componentInstance.clienteviejo = cliente;
    this.ngOnInit();
  }

}

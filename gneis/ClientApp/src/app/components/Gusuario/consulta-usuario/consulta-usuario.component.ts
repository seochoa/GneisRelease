import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../../Models/usuario';
import { UsuarioService } from '../../../Services/usuario.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.css']
})
export class ConsultaUsuarioComponent implements OnInit {
  usuarios : Usuario[];
  searchuser: string;
  constructor(private usuarioService : UsuarioService,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.usuarioService.gets().subscribe(result =>{
      this.usuarios = result;
    });
  }

  eliminar(iduser: string){
    this.usuarioService.delete(iduser).subscribe(mensaje =>{
      const menssageBox = this.modalService.open(AlertModalComponent)
      menssageBox.componentInstance.title = "Resultado Operacion";
      menssageBox.componentInstance.message = 'Usuario Eliminado Correctamente';
    });
    this.consultar();
  }

}

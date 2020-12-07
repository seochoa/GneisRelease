import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../../Models/usuario';
import { UsuarioService } from '../../../Services/usuario.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';
import { ActualizaUsuarioComponent } from '../actualiza-usuario/actualiza-usuario.component';
import { EliminaUsuarioComponent } from '../elimina-usuario/elimina-usuario.component';
import { User } from '../../../seguridad/user';

@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.css']
})
export class ConsultaUsuarioComponent implements OnInit {
  usuarios : User[];
  searchuser: string;
  constructor(private usuarioService : UsuarioService,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.usuarioService.gets().subscribe(result =>{
      this.usuarios = result;
      console.log(result);
    });
  }

  eliminar(usuario: User){
    const menssageBox = this.modalService.open(EliminaUsuarioComponent);
    menssageBox.componentInstance.usuarioeliminar= usuario;
    
    
  }

  actualizar(Usuario: User){
    const menssageBox = this.modalService.open(ActualizaUsuarioComponent)
    menssageBox.componentInstance.usuarioviejo = Usuario;
    this.ngOnInit();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../../Models/usuario';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../../../Services/usuario.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-elimina-usuario',
  templateUrl: './elimina-usuario.component.html',
  styleUrls: ['./elimina-usuario.component.css']
})
export class EliminaUsuarioComponent implements OnInit {
  @Input() usuarioeliminar: Usuario
  constructor(public activeModal: NgbActiveModal,private usuarioService : UsuarioService,private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  eliminar(){
     this.usuarioService.delete(this.usuarioeliminar.iduser).subscribe(mensaje =>{
       const menssageBox = this.modalService.open(AlertModalComponent);
       menssageBox.componentInstance.type = 'success';
       menssageBox.componentInstance.message = 'Usuario Eliminado Correctamente';
       this.activeModal.close();
     });
  }

}

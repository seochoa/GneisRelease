import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../../Models/usuario';
import { UsuarioService } from '../../../Services/usuario.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';
import { User } from '../../../seguridad/user';

@Component({
  selector: 'app-actualiza-usuario',
  templateUrl: './actualiza-usuario.component.html',
  styleUrls: ['./actualiza-usuario.component.css']
})
export class ActualizaUsuarioComponent implements OnInit {
  formGroup: FormGroup;
  @Input() usuarioviejo: User;
  usuario: User;
  constructor(public activeModal: NgbActiveModal,private usuarioService : UsuarioService, private formbuilder : FormBuilder,private modalService : NgbModal) { }
  
  ngOnInit(): void {
    this.buildform();
  }

  private buildform(){
    this.usuario = new User();
    this.usuario.role = this.usuarioviejo.role;
    this.usuario.password = this.usuarioviejo.password;

    this.formGroup = this.formbuilder.group({
      role     :[this.usuario.role, Validators.required],
      password     :[this.usuario.password,Validators.required],
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
    
    this.usuario = this.formGroup.value;
    this.usuario.username = this.usuarioviejo.username;
    console.log(this.usuario);
     this.usuarioService.update(this.usuario).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
       menssageBox.componentInstance.type = "success";
       menssageBox.componentInstance.message = 'Usuario Modificado Correctamente';
       this.activeModal.close();
      }
     });
  }

 


}

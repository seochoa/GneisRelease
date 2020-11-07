import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../../Models/usuario';
import { UsuarioService } from '../../../Services/usuario.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-actualiza-usuario',
  templateUrl: './actualiza-usuario.component.html',
  styleUrls: ['./actualiza-usuario.component.css']
})
export class ActualizaUsuarioComponent implements OnInit {
  formGroup: FormGroup;
  @Input() usuarioviejo: Usuario;
  usuario: Usuario;
  constructor(public activeModal: NgbActiveModal,private usuarioService : UsuarioService, private formbuilder : FormBuilder,private modalService : NgbModal) { }
  
  ngOnInit(): void {
    this.buildform();
  }

  private buildform(){
    this.usuario = new Usuario();
    this.usuario.typeuser = this.usuarioviejo.typeuser;
    this.usuario.password = this.usuarioviejo.password;

    this.formGroup = this.formbuilder.group({
      typeuser     :[this.usuario.typeuser, Validators.required],
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
    this.usuario.iduser = this.usuarioviejo.iduser;
    console.log(this.usuario);
     this.usuarioService.update(this.usuario).subscribe(p=>{
       const menssageBox = this.modalService.open(AlertModalComponent)
       menssageBox.componentInstance.type = "success";
       menssageBox.componentInstance.message = 'Usuario Modificado Correctamente';
       this.activeModal.close();
     });
  }

 


}

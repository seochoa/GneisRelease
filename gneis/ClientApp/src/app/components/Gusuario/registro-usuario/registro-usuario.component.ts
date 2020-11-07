import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../../Models/usuario';
import { UsuarioService } from '../../../Services/usuario.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  formGroup: FormGroup;
  usuario: Usuario;
  constructor(private usuarioService : UsuarioService, private formbuilder : FormBuilder,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.buildform();
  }

  private buildform(){
    this.usuario = new Usuario();
    this.usuario.iduser = '';
    this.usuario.typeuser = '';
    this.usuario.password = '';

    this.formGroup = this.formbuilder.group({
      iduser       :[this.usuario.iduser, Validators.required],
      typeuser     :[this.usuario.typeuser, Validators.required],
      password     :[this.usuario.password,Validators.required],
    });
  }

  get control(){
    return this.formGroup.controls;
  }

  onReset(){
    this.formGroup.reset();
  }

  onSave(){
    if(this.formGroup.invalid){
      return;
    }
    this.add();
 
  }

  add(){
    this.usuario = this.formGroup.value;
    this.usuarioService.post(this.usuario).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.type = 'success';
        menssageBox.componentInstance.message = 'Usuario registrado Correctamente';
        this.usuario = p;
      }
    });
    this.onReset();
  }

}

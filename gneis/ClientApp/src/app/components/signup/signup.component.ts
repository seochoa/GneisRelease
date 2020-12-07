import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../../Services/usuario.service';
import { Usuario } from '../../Models/usuario';
import { AlertModalComponent } from '../../@base/alert-modal/alert-modal.component';
import { User } from '../../seguridad/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup;
  usuario: User;
  constructor(private usuarioService : UsuarioService, private formbuilder : FormBuilder,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.buildform();
  }
  
  private buildform(){
    this.usuario = new User();
    this.usuario.username = '';
    this.usuario.password = '';

    this.formGroup = this.formbuilder.group({
      username       :[this.usuario.username, Validators.required],
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
    this.usuario.role = 'Cliente';
    console.log(this.usuario)
    this.usuarioService.post(this.usuario).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.type = 'success';
        menssageBox.componentInstance.message = 'Su usuario Se ha registrado exitosamente';
        this.onReset();
        this.usuario = p;
      }
    });
    
  }
 

}

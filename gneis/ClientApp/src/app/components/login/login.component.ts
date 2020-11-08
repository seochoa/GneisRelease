import { Component, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { NavBarComponent } from '../nav-Bars/nav-bar/nav-bar.component';
import { Usuario } from '../../Models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../Services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tipouser: string;
  cadena: string = '';
  formGroup: FormGroup;
  usuario: Usuario;
  usuarios : Usuario[];

  constructor(private usuarioService : UsuarioService, private formbuilder : FormBuilder,private modalService : NgbModal) {

   }

  ngOnInit(): void {
    this.buildform();
  }

  private buildform(){
    this.usuario = new Usuario();
    this.usuario.iduser = '';
    this.usuario.password = '';

    this.formGroup = this.formbuilder.group({
      iduser       :[this.usuario.iduser, Validators.required],
      password     :[this.usuario.password,Validators.required],
    });
  }

  get control(){
    return this.formGroup.controls;
  }

  onReset(){
    this.formGroup.reset();
  }

  consultar(){
    this.usuarioService.gets().subscribe(result =>{
      this.usuarios = result;
      console.log(result);
    });
  }

  login(): string{
    if(this.tipouser === "Admin"){
      this.cadena = '/home';
      
    }
    if(this.tipouser === "User"){
      this.cadena = '/home3';
    }
    if(this.tipouser === "Emp"){
      this.cadena = '/home2';
    }
    return this.cadena;

  }



}

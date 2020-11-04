import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../Models/usuario';
import { UsuarioService } from '../../../Services/usuario.service';

@Component({
  selector: 'app-homeusuario',
  templateUrl: './homeusuario.component.html',
  styleUrls: ['./homeusuario.component.css']
})
export class HomeusuarioComponent implements OnInit {
  
  formGroup: FormGroup;
  usuarios : Usuario[];
  usuario: Usuario;
  iduser: string;
  searchuser: string;
  constructor(private usuarioService : UsuarioService, private formbuilder : FormBuilder) { }

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
        alert('Usuario Creado');
        this.usuario = p;
      }
    });
    this.onReset();
  }

  consultar(){
    this.usuarioService.gets().subscribe(result =>{
      this.usuarios = result;
    });
  }

  eliminar(){
    this.usuarioService.delete(this.iduser).subscribe(mensaje =>{
      alert('Persona Eliminada Correctamente');
    });
    this.consultar();
  }

}

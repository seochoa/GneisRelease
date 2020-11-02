import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../Models/usuario';
import { UsuarioService } from '../../../Services/usuario.service';

@Component({
  selector: 'app-homeusuario',
  templateUrl: './homeusuario.component.html',
  styleUrls: ['./homeusuario.component.css']
})
export class HomeusuarioComponent implements OnInit {

  usuarios : Usuario[];
  usuario: Usuario;
  iduser: string;
  searchuser: string;
  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  add(){
    this.usuarioService.post(this.usuario).subscribe(p=>{
      if(p!=null){
        alert('Usuario Creado');
        this.usuario = p;
      }
    });
    this.consultar(); 
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

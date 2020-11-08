import { Component, Input, OnInit } from '@angular/core';
import { Mostrarbotones } from '../../../Models/mostrarbotones';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
 
  mostrar = true;
  mostrarbotones: Mostrarbotones;

  constructor() { }

  ngOnInit(): void {
    this.mostrarbotones = new Mostrarbotones();
    this.ocultar();
  }

  ocultar(){
    this.mostrarbotones.mostrarbtnAdmin = false;
    this.mostrarbotones.mostrarbtnEmp = false;
  }

  mostraradmin(){
    this.mostrarbotones.mostrarbtnAdmin != this.mostrarbotones.mostrarbtnAdmin;
  }

  mostrarbotone(){
    this.mostrar = !this.mostrar;
  }

}

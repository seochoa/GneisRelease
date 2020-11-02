import { Component, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tipouser: string;
  cadena: string = '';



  constructor() {

   }

  ngOnInit(): void {
    this.login();
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

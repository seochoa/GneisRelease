import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mostrarbotones } from '../../../Models/mostrarbotones';
import { Usuario } from '../../../Models/usuario';
import { AuthenticationService } from '../../../Services/authentication.service';
import { User } from '../../../seguridad/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
 
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    
  }

  ngOnInit(): void {
    
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  

}

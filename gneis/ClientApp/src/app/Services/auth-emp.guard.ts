import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEmpGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      if(currentUser.role==="Empleado"){
        return true;
      }
      else{
        return false;
      }
      // authorised so return true
      
    }

     // not logged in so redirect to login page with the return url
     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
     return false;
   }
  
}

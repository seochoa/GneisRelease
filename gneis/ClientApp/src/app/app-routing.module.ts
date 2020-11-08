import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/Homes/home/home.component';
import { Home2Component } from './components/Homes/home2/home2.component';
import { GempleadosComponent } from './components/gempleados/gempleados.component';
import { GreservasComponent } from './components/greservas/greservas.component';
import { GclientesComponent } from './components/gclientes/gclientes.component';

import { Home3Component } from './components/Homes/home3/home3.component';
import { GinvitadosComponent } from './components/ginvitados/ginvitados.component';
import { GreportesComponent } from './components/greportes/greportes.component';
import { GfacturasComponent } from './components/gfacturas/gfacturas.component';
import { Home4Component } from './components/Homes/home4/home4.component';

import { ReservaregistroComponent } from './components/reservaregistro/reservaregistro.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistroUsuarioComponent } from './components/Gusuario/registro-usuario/registro-usuario.component';
import { ConsultaUsuarioComponent } from './components/Gusuario/consulta-usuario/consulta-usuario.component';
import { RegistraHabitacionComponent } from './components/ghabitaciones/registra-habitacion/registra-habitacion.component';
import { ConsultaHabitacionComponent } from './components/ghabitaciones/consulta-habitacion/consulta-habitacion.component';
import { RegistrarProductoComponent } from './components/gproductos/registrar-producto/registrar-producto.component';
import { ConsultaProductoComponent } from './components/gproductos/consulta-producto/consulta-producto.component';




const routes: Routes=[
  {path: "signup" , component: SignupComponent},
  {path: "login" , component: LoginComponent},

  {path: "home" , component: Home2Component},
  {path: "home2" , component: Home3Component},
  {path: "home3" , component: Home4Component},

  {path: "RegistroU" , component: RegistroUsuarioComponent},
  {path: "ConsultaU" , component: ConsultaUsuarioComponent},

  {path: "RegistroH" , component: RegistraHabitacionComponent},
  {path: "ConsultaH" , component: ConsultaHabitacionComponent},

  {path: "RegistroP" , component: RegistrarProductoComponent},
  {path: "ConsultaP" , component: ConsultaProductoComponent},
  
  {path: "empleados" , component: GempleadosComponent},
  {path: "reservas" , component: GreservasComponent},
  {path: "clientes" , component: GclientesComponent},
  {path: "invitados" , component: GinvitadosComponent},
  {path: "reportes" , component: GreportesComponent},
  {path: "facturas" , component: GfacturasComponent},
  {path: "Rreserva" , component: ReservaregistroComponent},
  {path: "**", component: HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
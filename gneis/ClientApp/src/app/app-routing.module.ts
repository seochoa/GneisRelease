import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/Homes/home/home.component';
import { Home2Component } from './components/Homes/home2/home2.component';
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
import { RegistraReservaComponent } from './components/greservas/registra-reserva/registra-reserva.component';
import { ConsultarDiponibilidadComponent } from './components/greservas/consultar-diponibilidad/consultar-diponibilidad.component';
import { RegistroEmpleadoComponent } from './components/gempleados/registro-empleado/registro-empleado.component';
import { ConsultaEmpleadoComponent } from './components/gempleados/consulta-empleado/consulta-empleado.component';
import { RegistroClienteComponent } from './components/gclientes/registro-cliente/registro-cliente.component';
import { ConsultaClienteComponent } from './components/gclientes/consulta-cliente/consulta-cliente.component';
import { AuthAdminGuard } from './Services/auth-admin.guard';
import { AuthEmpGuard } from './Services/auth-emp.guard';
import { AuthClientGuard } from './Services/auth-client.guard';
import { RegistroCheckInComponent } from './components/greservas/registro-check-in/registro-check-in.component';
import { ListadoCheckinComponent } from './components/greservas/listado-checkin/listado-checkin.component';
import { ListadocheckoutComponent } from './components/greservas/listadocheckout/listadocheckout.component';




const routes: Routes=[
  {path: "signup" , component: SignupComponent},
  {path: "login" , component: LoginComponent},

  {path: "home" , component: Home2Component,canActivate: [AuthAdminGuard]},
  {path: "home2" , component: Home3Component,canActivate: [AuthEmpGuard]},
  {path: "home3" , component: Home4Component,canActivate: [AuthClientGuard]},

  {path: "RegistroU" , component: RegistroUsuarioComponent,canActivate: [AuthAdminGuard] },
  {path: "ConsultaU" , component: ConsultaUsuarioComponent,canActivate: [AuthAdminGuard] },

  {path: "RegistroH" , component: RegistraHabitacionComponent,canActivate: [AuthEmpGuard]},
  {path: "ConsultaH" , component: ConsultaHabitacionComponent,canActivate: [AuthEmpGuard]},

  {path: "RegistroP" , component: RegistrarProductoComponent,canActivate: [AuthEmpGuard]},
  {path: "ConsultaP" , component: ConsultaProductoComponent,canActivate: [AuthEmpGuard]},

  {path: "RegistroCI" , component: RegistroCheckInComponent,canActivate: [AuthEmpGuard]},
  {path: "RegistroCOUT" , component: ListadoCheckinComponent,canActivate: [AuthEmpGuard]},
  {path: "RegistroF" , component: ListadocheckoutComponent,canActivate: [AuthEmpGuard]},

  {path: "RegistroRU" , component: RegistraReservaComponent,canActivate: [AuthClientGuard]},
  {path: "ConsultaDH" , component: ConsultarDiponibilidadComponent,canActivate: [AuthClientGuard]},

  {path: "ConsultaDHE" , component: ConsultarDiponibilidadComponent,canActivate: [AuthEmpGuard]},

  {path: "RegistroE" , component: RegistroEmpleadoComponent,canActivate: [AuthAdminGuard] },
  {path: "ConsultaE" , component: ConsultaEmpleadoComponent,canActivate: [AuthAdminGuard] },

  {path: "RegistroC" , component: RegistroClienteComponent,canActivate: [AuthEmpGuard]},
  {path: "ConsultaC" , component: ConsultaClienteComponent,canActivate: [AuthEmpGuard]},

  // {path: "clientes" , component: GclientesComponent},
  // {path: "invitados" , component: GinvitadosComponent},
  // {path: "reportes" , component: GreportesComponent},
  // {path: "facturas" , component: GfacturasComponent},
  // {path: "Rreserva" , component: ReservaregistroComponent},
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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Home2Component } from './components/home2/home2.component';
import { GhabitacionesComponent } from './components/ghabitaciones/ghabitaciones.component';
import { GempleadosComponent } from './components/gempleados/gempleados.component';
import { GreservasComponent } from './components/greservas/greservas.component';
import { GclientesComponent } from './components/gclientes/gclientes.component';
import { GproductosComponent } from './components/gproductos/gproductos.component';
import { Home3Component } from './components/home3/home3.component';
import { GinvitadosComponent } from './components/ginvitados/ginvitados.component';
import { GreportesComponent } from './components/greportes/greportes.component';
import { GfacturasComponent } from './components/gfacturas/gfacturas.component';
import { Home4Component } from './components/home4/home4.component';
import { HabitacionesConsultaComponent } from './components/habitaciones-consulta/habitaciones-consulta.component';
import { ReservaregistroComponent } from './components/reservaregistro/reservaregistro.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistroUsuarioComponent } from './components/Gusuario/registro-usuario/registro-usuario.component';
import { ConsultaUsuarioComponent } from './components/Gusuario/consulta-usuario/consulta-usuario.component';



const routes: Routes=[
  {path: "home" , component: Home2Component},
  {path: "home2" , component: Home3Component},
  {path: "home3" , component: Home4Component},
  {path: "RegistroU" , component: RegistroUsuarioComponent},
  {path: "ConsultaU" , component: ConsultaUsuarioComponent},
  {path: "habitaciones" , component: GhabitacionesComponent},
  {path: "empleados" , component: GempleadosComponent},
  {path: "reservas" , component: GreservasComponent},
  {path: "clientes" , component: GclientesComponent},
  {path: "invitados" , component: GinvitadosComponent},
  {path: "productos" , component: GproductosComponent},
  {path: "signup" , component: SignupComponent},
  {path: "login" , component: LoginComponent},
  {path: "reportes" , component: GreportesComponent},
  {path: "facturas" , component: GfacturasComponent},
  {path: "Chabitaciones" , component: HabitacionesConsultaComponent},
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
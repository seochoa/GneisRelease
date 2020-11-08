import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-Bars/nav-bar/nav-bar.component';
import { HomeComponent } from './components/Homes/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { Home2Component } from './components/Homes/home2/home2.component';
import { GempleadosComponent } from './components/gempleados/gempleados.component';
import { GreservasComponent } from './components/greservas/greservas.component';
import { GclientesComponent } from './components/gclientes/gclientes.component';
import { GproductosComponent } from './components/gproductos/gproductos.component';
import { NavBarAdminComponent } from './components/nav-Bars/nav-bar-admin/nav-bar-admin.component';
import { Home3Component } from './components/Homes/home3/home3.component';
import { NavBarEmpComponent } from './components/nav-Bars/nav-bar-emp/nav-bar-emp.component';
import { GinvitadosComponent } from './components/ginvitados/ginvitados.component';
import { GreportesComponent } from './components/greportes/greportes.component';
import { GfacturasComponent } from './components/gfacturas/gfacturas.component';
import { Home4Component } from './components/Homes/home4/home4.component';
import { NavBarUserComponent } from './components/nav-Bars/nav-bar-user/nav-bar-user.component';
import { HabitacionesConsultaComponent } from './components/habitaciones-consulta/habitaciones-consulta.component';
import { ReservaregistroComponent } from './components/reservaregistro/reservaregistro.component';
import { UsuarioService } from './Services/usuario.service';
import { FiltroUsuarioPipe } from './pipes/filtro-usuario.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltroproductoPipe } from './pipes/filtroproducto.pipe';
import { FiltrohabitacionPipe } from './pipes/filtrohabitacion.pipe';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistroUsuarioComponent } from './components/Gusuario/registro-usuario/registro-usuario.component';
import { ConsultaUsuarioComponent } from './components/Gusuario/consulta-usuario/consulta-usuario.component';
import { ActualizaUsuarioComponent } from './components/Gusuario/actualiza-usuario/actualiza-usuario.component';
import { RegistraHabitacionComponent } from './components/ghabitaciones/registra-habitacion/registra-habitacion.component';
import { ConsultaHabitacionComponent } from './components/ghabitaciones/consulta-habitacion/consulta-habitacion.component';
import { ActualizaHabitacionComponent } from './components/ghabitaciones/actualiza-habitacion/actualiza-habitacion.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    Home2Component,
    GempleadosComponent,
    GreservasComponent,
    GclientesComponent,
    GproductosComponent,
    NavBarAdminComponent,
    Home3Component,
    NavBarEmpComponent,
    GinvitadosComponent,
    GreportesComponent,
    GfacturasComponent,
    Home4Component,
    NavBarUserComponent,
    HabitacionesConsultaComponent,
    ReservaregistroComponent,
    FiltroUsuarioPipe,
    FiltroproductoPipe,
    FiltrohabitacionPipe,
    AlertModalComponent,
    SignupComponent,
    RegistroUsuarioComponent,
    ConsultaUsuarioComponent,
    ActualizaUsuarioComponent,
    RegistraHabitacionComponent,
    ConsultaHabitacionComponent,
    ActualizaHabitacionComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [AlertModalComponent,ActualizaUsuarioComponent,ActualizaHabitacionComponent],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

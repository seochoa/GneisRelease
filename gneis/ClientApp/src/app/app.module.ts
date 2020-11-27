import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//NavBars
import { NavBarComponent } from './components/nav-Bars/nav-bar/nav-bar.component';
import { NavBarAdminComponent } from './components/nav-Bars/nav-bar-admin/nav-bar-admin.component';
import { NavBarEmpComponent } from './components/nav-Bars/nav-bar-emp/nav-bar-emp.component';
import { NavBarUserComponent } from './components/nav-Bars/nav-bar-user/nav-bar-user.component';

//Home
import { HomeComponent } from './components/Homes/home/home.component';
import { Home2Component } from './components/Homes/home2/home2.component';
import { Home3Component } from './components/Homes/home3/home3.component';
import { Home4Component } from './components/Homes/home4/home4.component';

//Gusuarios
import { RegistroUsuarioComponent } from './components/Gusuario/registro-usuario/registro-usuario.component';
import { ConsultaUsuarioComponent } from './components/Gusuario/consulta-usuario/consulta-usuario.component';
import { ActualizaUsuarioComponent } from './components/Gusuario/actualiza-usuario/actualiza-usuario.component';
import { EliminaUsuarioComponent } from './components/Gusuario/elimina-usuario/elimina-usuario.component';

//Ghabitaciones
import { RegistraHabitacionComponent } from './components/ghabitaciones/registra-habitacion/registra-habitacion.component';
import { ConsultaHabitacionComponent } from './components/ghabitaciones/consulta-habitacion/consulta-habitacion.component';
import { ActualizaHabitacionComponent } from './components/ghabitaciones/actualiza-habitacion/actualiza-habitacion.component';
import { EliminaHabitacionComponent } from './components/ghabitaciones/elimina-habitacion/elimina-habitacion.component';

//Gproductos
import { ActualizaProductoComponent } from './components/gproductos/actualiza-producto/actualiza-producto.component';
import { ConsultaProductoComponent } from './components/gproductos/consulta-producto/consulta-producto.component';
import { RegistrarProductoComponent } from './components/gproductos/registrar-producto/registrar-producto.component';
import { EliminaProductoComponent } from './components/gproductos/elimina-producto/elimina-producto.component';

//Pipes
import { FiltroUsuarioPipe } from './pipes/filtro-usuario.pipe';
import { FiltroproductoPipe } from './pipes/filtroproducto.pipe';
import { FiltrohabitacionPipe } from './pipes/filtrohabitacion.pipe';

//Login y SingUp
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';

//More
import { GempleadosComponent } from './components/gempleados/gempleados.component';
import { GreservasComponent } from './components/greservas/greservas.component';
import { GclientesComponent } from './components/gclientes/gclientes.component';
import { GinvitadosComponent } from './components/ginvitados/ginvitados.component';
import { GreportesComponent } from './components/greportes/greportes.component';
import { GfacturasComponent } from './components/gfacturas/gfacturas.component';
import { ReservaregistroComponent } from './components/reservaregistro/reservaregistro.component';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';

//Service
import { UsuarioService } from './Services/usuario.service';
import { HabitacionService } from './Services/habitacion.service';
import { ProductoService } from './Services/producto.service';

import { RegistraReservaComponent } from './components/greservas/registra-reserva/registra-reserva.component';
import { ConsultarDiponibilidadComponent } from './components/greservas/consultar-diponibilidad/consultar-diponibilidad.component';
import { Filtrohabitacion2Pipe } from './pipes/filtrohabitacion2.pipe';






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
    NavBarAdminComponent,
    Home3Component,
    NavBarEmpComponent,
    GinvitadosComponent,
    GreportesComponent,
    GfacturasComponent,
    Home4Component,
    NavBarUserComponent,
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
    ActualizaProductoComponent,
    ConsultaProductoComponent,
    RegistrarProductoComponent,
    EliminaUsuarioComponent,
    EliminaProductoComponent,
    EliminaHabitacionComponent,
    RegistraReservaComponent,
    ConsultarDiponibilidadComponent,
    Filtrohabitacion2Pipe,
    

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [
    AlertModalComponent,
    ActualizaUsuarioComponent,
    ActualizaHabitacionComponent,
    ActualizaProductoComponent,
    EliminaUsuarioComponent,
    EliminaProductoComponent,
    EliminaHabitacionComponent],
    
  providers: [
    UsuarioService,
    HabitacionService,
    ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

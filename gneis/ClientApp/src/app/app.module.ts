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
import { FiltroempleadoPipe } from './pipes/filtroempleado.pipe';
import { RegistroEmpleadoComponent } from './components/gempleados/registro-empleado/registro-empleado.component';
import { ConsultaEmpleadoComponent } from './components/gempleados/consulta-empleado/consulta-empleado.component';
import { EliminaEmpleadoComponent } from './components/gempleados/elimina-empleado/elimina-empleado.component';
import { ActualizaEmpleadoComponent } from './components/gempleados/actualiza-empleado/actualiza-empleado.component';
import { VerinfoEmpleadoComponent } from './components/gempleados/verinfo-empleado/verinfo-empleado.component';
import { VerinfoClienteComponent } from './components/gclientes/verinfo-cliente/verinfo-cliente.component';
import { RegistroClienteComponent } from './components/gclientes/registro-cliente/registro-cliente.component';
import { ConsultaClienteComponent } from './components/gclientes/consulta-cliente/consulta-cliente.component';
import { ActualizaClienteComponent } from './components/gclientes/actualiza-cliente/actualiza-cliente.component';
import { FiltroclientePipe } from './pipes/filtrocliente.pipe';
import { JwtInterceptor } from './Services/jwt.interceptor';
import { RegistroCheckInComponent } from './components/greservas/registro-check-in/registro-check-in.component';
import { VerinfoReservaComponent } from './components/greservas/verinfo-reserva/verinfo-reserva.component';
import { CancelarReservaComponent } from './components/greservas/cancelar-reserva/cancelar-reserva.component';
import { RegistroEntradaComponent } from './components/greservas/registro-entrada/registro-entrada.component';
import { ListadoCheckinComponent } from './components/greservas/listado-checkin/listado-checkin.component';
import { RegistrocheckoutComponent } from './components/greservas/registrocheckout/registrocheckout.component';
import { ListadocheckoutComponent } from './components/greservas/listadocheckout/listadocheckout.component';
import { GenerarfacturapdfComponent } from './components/greservas/generarfacturapdf/generarfacturapdf.component';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    Home2Component,
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
    FiltroempleadoPipe,
    RegistroEmpleadoComponent,
    ConsultaEmpleadoComponent,
    EliminaEmpleadoComponent,
    ActualizaEmpleadoComponent,
    VerinfoEmpleadoComponent,
    VerinfoClienteComponent,
    RegistroClienteComponent,
    ConsultaClienteComponent,
    ActualizaClienteComponent,
    FiltroclientePipe,
    RegistroCheckInComponent,
    VerinfoReservaComponent,
    CancelarReservaComponent,
    RegistroEntradaComponent,
    ListadoCheckinComponent,
    RegistrocheckoutComponent,
    ListadocheckoutComponent,
    GenerarfacturapdfComponent,
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
    ActualizaEmpleadoComponent,
    ActualizaClienteComponent,
    EliminaUsuarioComponent,
    EliminaProductoComponent,
    EliminaHabitacionComponent,
    EliminaEmpleadoComponent,
    VerinfoEmpleadoComponent,
    VerinfoClienteComponent,
    RegistraReservaComponent,
    VerinfoReservaComponent,
    CancelarReservaComponent,
    RegistroEntradaComponent,
    RegistrocheckoutComponent,
    GenerarfacturapdfComponent],
    
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeusuarioComponent } from './components/Gusuario/homeusuario/homeusuario.component';
import { Home2Component } from './components/home2/home2.component';
import { GhabitacionesComponent } from './components/ghabitaciones/ghabitaciones.component';
import { GempleadosComponent } from './components/gempleados/gempleados.component';
import { GreservasComponent } from './components/greservas/greservas.component';
import { GclientesComponent } from './components/gclientes/gclientes.component';
import { GproductosComponent } from './components/gproductos/gproductos.component';
import { NavBarAdminComponent } from './components/nav-bar-admin/nav-bar-admin.component';
import { Home3Component } from './components/home3/home3.component';
import { NavBarEmpComponent } from './components/nav-bar-emp/nav-bar-emp.component';
import { GinvitadosComponent } from './components/ginvitados/ginvitados.component';
import { GreportesComponent } from './components/greportes/greportes.component';
import { GfacturasComponent } from './components/gfacturas/gfacturas.component';
import { Home4Component } from './components/home4/home4.component';
import { NavBarUserComponent } from './components/nav-bar-user/nav-bar-user.component';
import { HabitacionesConsultaComponent } from './components/habitaciones-consulta/habitaciones-consulta.component';
import { ReservaregistroComponent } from './components/reservaregistro/reservaregistro.component';
import { UsuarioService } from './Services/usuario.service';
import { FiltroUsuarioPipe } from './pipes/filtro-usuario.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    HomeusuarioComponent,
    Home2Component,
    GhabitacionesComponent,
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
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

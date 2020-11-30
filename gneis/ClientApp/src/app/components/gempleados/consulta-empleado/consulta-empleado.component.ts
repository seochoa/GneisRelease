import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../Models/empleado';
import { EmpleadoService } from '../../../Services/empleado.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EliminaEmpleadoComponent } from '../elimina-empleado/elimina-empleado.component';
import { VerinfoEmpleadoComponent } from '../verinfo-empleado/verinfo-empleado.component';
import { ActualizaEmpleadoComponent } from '../actualiza-empleado/actualiza-empleado.component';

@Component({
  selector: 'app-consulta-empleado',
  templateUrl: './consulta-empleado.component.html',
  styleUrls: ['./consulta-empleado.component.css']
})
export class ConsultaEmpleadoComponent implements OnInit {
  empleados : Empleado[];
  searchuser: string;
  constructor(private empleadoService : EmpleadoService,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.empleadoService.gets().subscribe(result =>{
      this.empleados = result;
      console.log(result);
    });
  }

  eliminar(Empleado: Empleado){
     const menssageBox = this.modalService.open(EliminaEmpleadoComponent);
     menssageBox.componentInstance.empleadoeliminar= Empleado;
  }

  Verinfo(Empleado: Empleado){
    const menssageBox = this.modalService.open(VerinfoEmpleadoComponent);
    menssageBox.componentInstance.empleadomostrar= Empleado;
  }

  actualizar(Empleado: Empleado){
    const menssageBox = this.modalService.open(ActualizaEmpleadoComponent)
    menssageBox.componentInstance.empleadoviejo = Empleado;
    this.ngOnInit();
  }

}

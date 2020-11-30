import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../../Models/usuario';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpleadoService } from '../../../Services/empleado.service';
import { Empleado } from 'src/app/Models/empleado';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-elimina-empleado',
  templateUrl: './elimina-empleado.component.html',
  styleUrls: ['./elimina-empleado.component.css']
})
export class EliminaEmpleadoComponent implements OnInit {
  @Input() empleadoeliminar: Empleado;
  constructor(public activeModal: NgbActiveModal,private empleadoService : EmpleadoService,private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  eliminar(){
    this.empleadoService.delete(this.empleadoeliminar.cedula).subscribe(mensaje =>{
      const menssageBox = this.modalService.open(AlertModalComponent);
      menssageBox.componentInstance.type = 'success';
      menssageBox.componentInstance.message = 'Empleado Eliminado Correctamente';
      this.activeModal.close();
    });
 }

}

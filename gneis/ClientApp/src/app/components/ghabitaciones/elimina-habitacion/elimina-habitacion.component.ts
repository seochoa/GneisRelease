import { Component, Input, OnInit } from '@angular/core';
import { Habitacion } from 'src/app/Models/habitacion';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HabitacionService } from '../../../Services/habitacion.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-elimina-habitacion',
  templateUrl: './elimina-habitacion.component.html',
  styleUrls: ['./elimina-habitacion.component.css']
})
export class EliminaHabitacionComponent implements OnInit {
  @Input() habitacion: Habitacion

  constructor(public activeModal: NgbActiveModal,private habitacionService : HabitacionService,private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  eliminar(){
    this.habitacionService.delete(this.habitacion.idhabitacion).subscribe(mensaje =>{
      const menssageBox = this.modalService.open(AlertModalComponent)
      menssageBox.componentInstance.type = 'success';
      menssageBox.componentInstance.message = 'Habitacion Eliminada Correctamente';
      this.activeModal.close();
    });
  }

}

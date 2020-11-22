import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../../Models/producto';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from '../../../Services/producto.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-elimina-producto',
  templateUrl: './elimina-producto.component.html',
  styleUrls: ['./elimina-producto.component.css']
})
export class EliminaProductoComponent implements OnInit {
  @Input() producto: Producto
  constructor(public activeModal: NgbActiveModal,private productoService : ProductoService,private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  eliminar(){
    this.productoService.delete(this.producto.idproducto).subscribe(mensaje =>{
      const menssageBox = this.modalService.open(AlertModalComponent)
      menssageBox.componentInstance.type = 'success';
      menssageBox.componentInstance.message = 'Producto Eliminado Correctamente';
      this.activeModal.close();
    });
  }

}

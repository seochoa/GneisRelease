import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from '../../../Models/producto';
import { ProductoService } from '../../../Services/producto.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';
import { ActualizaProductoComponent } from '../actualiza-producto/actualiza-producto.component';

@Component({
  selector: 'app-consulta-producto',
  templateUrl: './consulta-producto.component.html',
  styleUrls: ['./consulta-producto.component.css']
})
export class ConsultaProductoComponent implements OnInit {
  searchproducto: string;
  productos : Producto[];
  constructor(private productoService : ProductoService,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.productoService.gets().subscribe(result =>{
      this.productos = result;
    });
  }

  eliminar(idproducto :string){
    this.productoService.delete(idproducto).subscribe(mensaje =>{
      const menssageBox = this.modalService.open(AlertModalComponent)
      menssageBox.componentInstance.type = 'danger';
      menssageBox.componentInstance.message = 'Producto Eliminado Correctamente';
      this.consultar();
    });
  }

  actualizar(producto : Producto){
    const menssageBox = this.modalService.open(ActualizaProductoComponent)
    menssageBox.componentInstance.productoviejo = producto;
    this.ngOnInit();
  }

}

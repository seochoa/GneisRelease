import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from '../../../Models/producto';
import { ProductoService } from '../../../Services/producto.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-actualiza-producto',
  templateUrl: './actualiza-producto.component.html',
  styleUrls: ['./actualiza-producto.component.css']
})
export class ActualizaProductoComponent implements OnInit {
  formGroup: FormGroup;
  @Input() productoviejo: Producto;
  producto: Producto;
  constructor(private productoService : ProductoService, private formbuilder : FormBuilder,private modalService : NgbModal,public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.buildform();
  }
  private buildform(){
    this.producto = new Producto();
    this.producto.descripcion = this.productoviejo.descripcion;
    this.producto.stock = this.productoviejo.stock;
    this.producto.vrunitario = this.productoviejo.vrunitario;

    this.formGroup = this.formbuilder.group({
      descripcion     :[this.producto.descripcion, Validators.required],
      stock           :[this.producto.stock,Validators.required],
      vrunitario      :[this.producto.vrunitario,Validators.required]
    });
  }

  get control(){
    return this.formGroup.controls;
  }

  onUpdate(){
    if(this.formGroup.invalid){
      return;
    }
    this.Update();
 
  }

  Update(){
    
    this.producto = this.formGroup.value;
    this.producto.idproducto = this.productoviejo.idproducto;
     this.productoService.update(this.producto).subscribe(p=>{
       const menssageBox = this.modalService.open(AlertModalComponent)
       menssageBox.componentInstance.type = "success";
       menssageBox.componentInstance.message = 'Producto Modificado Correctamente';
       this.activeModal.close();
     });
  }

}

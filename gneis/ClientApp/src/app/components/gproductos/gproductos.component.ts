import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Models/producto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../Services/producto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-gproductos',
  templateUrl: './gproductos.component.html',
  styleUrls: ['./gproductos.component.css']
})
export class GproductosComponent implements OnInit {

  formGroup: FormGroup;
  searchproducto: string;
  productos : Producto[];
  producto : Producto;
  idproducto : string;

  constructor(private productoService : ProductoService, private formbuilder : FormBuilder,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.buildform();
  }

  private buildform(){
    this.producto = new Producto();
    this.producto.idproducto = '';
    this.producto.descripcion = '';
    this.producto.stock = 0;
    this.producto.vrunitario = 0;

    this.formGroup = this.formbuilder.group({
      idproducto      :[this.producto.idproducto, Validators.required],
      descripcion     :[this.producto.descripcion, Validators.required],
      stock           :[this.producto.stock,Validators.required],
      vrunitario      :[this.producto.vrunitario,Validators.required]
    });
  }

  get control(){
    return this.formGroup.controls;
  }

  onReset(){
    this.formGroup.reset();
  }

  onSave(){
    if(this.formGroup.invalid){
      return;
    }
    this.add();
  }

  add(){
    this.producto = this.formGroup.value;
    this.productoService.post(this.producto).subscribe(p=>{
      if(p!=null){
        const menssageBox = this.modalService.open(AlertModalComponent)
        menssageBox.componentInstance.title = "Resultado Operacion";
        menssageBox.componentInstance.message = 'Producto registrado Correctamente';
        this.producto = p;
      }
    });
    this.onReset();
  }

  consultar(){
    this.productoService.gets().subscribe(result =>{
      this.productos = result;
    });
  }

  eliminar(){
    this.productoService.delete(this.idproducto).subscribe(mensaje =>{
      const menssageBox = this.modalService.open(AlertModalComponent)
      menssageBox.componentInstance.title = "Resultado Operacion";
      menssageBox.componentInstance.message = 'Producto Eliminado Correctamente';
    });
    this.onReset();
  }

}

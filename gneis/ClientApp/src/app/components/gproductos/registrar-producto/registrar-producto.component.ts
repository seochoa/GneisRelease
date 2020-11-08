import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from '../../../Models/producto';
import { ProductoService } from '../../../Services/producto.service';
import { AlertModalComponent } from '../../../@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  formGroup: FormGroup;
  producto : Producto;
  
  constructor(private productoService : ProductoService, private formbuilder : FormBuilder,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.buildform();
  }

  private buildform(){
    this.producto = new Producto();
    this.producto.idproducto = '';
    this.producto.descripcion = '';
    this.producto.stock = null;
    this.producto.vrunitario = null;

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
        menssageBox.componentInstance.type = "success";
        menssageBox.componentInstance.message = 'Producto registrado Correctamente';
        this.producto = p;
      }
    });
    this.onReset();
  }

}

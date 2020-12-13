import { Component, Input, OnInit } from '@angular/core';
import { Checkout } from '../../../Models/checkout';
import { Cliente } from '../../../Models/cliente';
import { Habitacion } from 'src/app/Models/habitacion';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from '../../../Services/cliente.service';
import { HabitacionService } from '../../../Services/habitacion.service';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-generarfacturapdf',
  templateUrl: './generarfacturapdf.component.html',
  styleUrls: ['./generarfacturapdf.component.css']
})
export class GenerarfacturapdfComponent implements OnInit {
  @Input() checkout : Checkout;
  fecha: Date;
  cliente : Cliente;
  habitacion : Habitacion;
  constructor(private habitacionService: HabitacionService,
    private modalService : NgbModal,
    private clienteService: ClienteService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.habitacionService.get(this.checkout.idhabitacion).subscribe(result =>{
      this.habitacion = result;
      
    });

    this.clienteService.get(this.checkout.idcliente).subscribe(result =>{
      this.cliente = result;  
    });
    this.fecha = new Date();
  }

  generarpdf(){
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_Factura.pdf`);
    });

  }


}

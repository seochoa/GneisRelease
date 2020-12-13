import { Component, OnInit } from '@angular/core';
import { Checkout } from '../../../Models/checkout';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutService } from '../../../Services/checkout.service';
import { GenerarfacturapdfComponent } from '../generarfacturapdf/generarfacturapdf.component';

@Component({
  selector: 'app-listadocheckout',
  templateUrl: './listadocheckout.component.html',
  styleUrls: ['./listadocheckout.component.css']
})
export class ListadocheckoutComponent implements OnInit {
  checkouts : Checkout[];
  searchcheck: string;
  constructor(private checkoutService : CheckoutService,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.consultar();
  }
  consultar(){
    this.checkoutService.gets().subscribe(result =>{
      this.checkouts = result;
    });
  }

  generarfactura(checkout : Checkout){
    const menssageBox = this.modalService.open(GenerarfacturapdfComponent);
    menssageBox.componentInstance.checkout = checkout;
  }

}

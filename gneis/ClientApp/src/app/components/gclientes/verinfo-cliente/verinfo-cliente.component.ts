import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../../Models/cliente';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-verinfo-cliente',
  templateUrl: './verinfo-cliente.component.html',
  styleUrls: ['./verinfo-cliente.component.css']
})
export class VerinfoClienteComponent implements OnInit {
  @Input() clientemostrar: Cliente;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

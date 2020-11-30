import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../../Models/usuario';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Empleado } from '../../../Models/empleado';

@Component({
  selector: 'app-verinfo-empleado',
  templateUrl: './verinfo-empleado.component.html',
  styleUrls: ['./verinfo-empleado.component.css']
})
export class VerinfoEmpleadoComponent implements OnInit {
  @Input() empleadomostrar: Empleado;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

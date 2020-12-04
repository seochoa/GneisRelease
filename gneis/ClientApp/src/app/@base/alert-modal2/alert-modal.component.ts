import { Component, OnInit,Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { title } from 'process';


@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  @Input() title;
  @Input() message;
  constructor(public activeModal: NgbActiveModal) { 
   

  }

  ngOnInit(): void {
  }

}

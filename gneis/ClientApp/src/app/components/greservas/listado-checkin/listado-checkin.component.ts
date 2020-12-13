import { Component, OnInit } from '@angular/core';
import { Checkin } from '../../../Models/checkin';
import { CheckinService } from '../../../Services/checkin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrocheckoutComponent } from '../registrocheckout/registrocheckout.component';

@Component({
  selector: 'app-listado-checkin',
  templateUrl: './listado-checkin.component.html',
  styleUrls: ['./listado-checkin.component.css']
})
export class ListadoCheckinComponent implements OnInit {
  checkins : Checkin[];
  searchcheck: string;
  constructor(private checkinService : CheckinService,private modalService : NgbModal) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.checkinService.gets().subscribe(result =>{
      this.checkins = result;
    });
  }

  checkout(checkin : Checkin){
    const menssageBox = this.modalService.open(RegistrocheckoutComponent);
    menssageBox.componentInstance.checkin= checkin;
  }

}

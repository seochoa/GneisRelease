import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDiponibilidadComponent } from './consultar-diponibilidad.component';

describe('ConsultarDiponibilidadComponent', () => {
  let component: ConsultarDiponibilidadComponent;
  let fixture: ComponentFixture<ConsultarDiponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarDiponibilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarDiponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

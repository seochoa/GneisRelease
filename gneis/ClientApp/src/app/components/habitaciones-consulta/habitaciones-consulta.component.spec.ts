import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionesConsultaComponent } from './habitaciones-consulta.component';

describe('HabitacionesConsultaComponent', () => {
  let component: HabitacionesConsultaComponent;
  let fixture: ComponentFixture<HabitacionesConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitacionesConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionesConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

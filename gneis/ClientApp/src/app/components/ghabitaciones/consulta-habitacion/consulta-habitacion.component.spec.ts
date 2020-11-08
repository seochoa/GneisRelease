import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaHabitacionComponent } from './consulta-habitacion.component';

describe('ConsultaHabitacionComponent', () => {
  let component: ConsultaHabitacionComponent;
  let fixture: ComponentFixture<ConsultaHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

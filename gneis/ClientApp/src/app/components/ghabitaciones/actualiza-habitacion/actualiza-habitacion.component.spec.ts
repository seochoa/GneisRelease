import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaHabitacionComponent } from './actualiza-habitacion.component';

describe('ActualizaHabitacionComponent', () => {
  let component: ActualizaHabitacionComponent;
  let fixture: ComponentFixture<ActualizaHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

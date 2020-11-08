import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraHabitacionComponent } from './registra-habitacion.component';

describe('RegistraHabitacionComponent', () => {
  let component: RegistraHabitacionComponent;
  let fixture: ComponentFixture<RegistraHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

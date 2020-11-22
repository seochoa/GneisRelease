import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaHabitacionComponent } from './elimina-habitacion.component';

describe('EliminaHabitacionComponent', () => {
  let component: EliminaHabitacionComponent;
  let fixture: ComponentFixture<EliminaHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

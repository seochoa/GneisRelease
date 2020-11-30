import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaEmpleadoComponent } from './elimina-empleado.component';

describe('EliminaEmpleadoComponent', () => {
  let component: EliminaEmpleadoComponent;
  let fixture: ComponentFixture<EliminaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerinfoEmpleadoComponent } from './verinfo-empleado.component';

describe('VerinfoEmpleadoComponent', () => {
  let component: VerinfoEmpleadoComponent;
  let fixture: ComponentFixture<VerinfoEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerinfoEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerinfoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaClienteComponent } from './actualiza-cliente.component';

describe('ActualizaClienteComponent', () => {
  let component: ActualizaClienteComponent;
  let fixture: ComponentFixture<ActualizaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

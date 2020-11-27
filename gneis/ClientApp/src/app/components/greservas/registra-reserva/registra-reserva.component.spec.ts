import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraReservaComponent } from './registra-reserva.component';

describe('RegistraReservaComponent', () => {
  let component: RegistraReservaComponent;
  let fixture: ComponentFixture<RegistraReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

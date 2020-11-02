import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhabitacionesComponent } from './ghabitaciones.component';

describe('GhabitacionesComponent', () => {
  let component: GhabitacionesComponent;
  let fixture: ComponentFixture<GhabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhabitacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarfacturapdfComponent } from './generarfacturapdf.component';

describe('GenerarfacturapdfComponent', () => {
  let component: GenerarfacturapdfComponent;
  let fixture: ComponentFixture<GenerarfacturapdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarfacturapdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarfacturapdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

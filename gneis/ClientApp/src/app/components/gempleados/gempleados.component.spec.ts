import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GempleadosComponent } from './gempleados.component';

describe('GempleadosComponent', () => {
  let component: GempleadosComponent;
  let fixture: ComponentFixture<GempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GempleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

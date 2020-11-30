import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerinfoClienteComponent } from './verinfo-cliente.component';

describe('VerinfoClienteComponent', () => {
  let component: VerinfoClienteComponent;
  let fixture: ComponentFixture<VerinfoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerinfoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerinfoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

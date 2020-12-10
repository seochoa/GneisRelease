import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerinfoReservaComponent } from './verinfo-reserva.component';

describe('VerinfoReservaComponent', () => {
  let component: VerinfoReservaComponent;
  let fixture: ComponentFixture<VerinfoReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerinfoReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerinfoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

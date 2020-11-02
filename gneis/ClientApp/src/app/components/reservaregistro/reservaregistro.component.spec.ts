import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaregistroComponent } from './reservaregistro.component';

describe('ReservaregistroComponent', () => {
  let component: ReservaregistroComponent;
  let fixture: ComponentFixture<ReservaregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

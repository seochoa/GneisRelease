import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreservasComponent } from './greservas.component';

describe('GreservasComponent', () => {
  let component: GreservasComponent;
  let fixture: ComponentFixture<GreservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreportesComponent } from './greportes.component';

describe('GreportesComponent', () => {
  let component: GreportesComponent;
  let fixture: ComponentFixture<GreportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

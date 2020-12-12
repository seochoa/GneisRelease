import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCheckinComponent } from './listado-checkin.component';

describe('ListadoCheckinComponent', () => {
  let component: ListadoCheckinComponent;
  let fixture: ComponentFixture<ListadoCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCheckinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

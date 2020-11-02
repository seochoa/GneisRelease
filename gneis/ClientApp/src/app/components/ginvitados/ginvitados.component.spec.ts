import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GinvitadosComponent } from './ginvitados.component';

describe('GinvitadosComponent', () => {
  let component: GinvitadosComponent;
  let fixture: ComponentFixture<GinvitadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GinvitadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GinvitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

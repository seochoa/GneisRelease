import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GfacturasComponent } from './gfacturas.component';

describe('GfacturasComponent', () => {
  let component: GfacturasComponent;
  let fixture: ComponentFixture<GfacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GfacturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GfacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

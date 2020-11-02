import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GproductosComponent } from './gproductos.component';

describe('GproductosComponent', () => {
  let component: GproductosComponent;
  let fixture: ComponentFixture<GproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

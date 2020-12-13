import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocheckoutComponent } from './registrocheckout.component';

describe('RegistrocheckoutComponent', () => {
  let component: RegistrocheckoutComponent;
  let fixture: ComponentFixture<RegistrocheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrocheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrocheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

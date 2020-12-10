import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCheckInComponent } from './registro-check-in.component';

describe('RegistroCheckInComponent', () => {
  let component: RegistroCheckInComponent;
  let fixture: ComponentFixture<RegistroCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCheckInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

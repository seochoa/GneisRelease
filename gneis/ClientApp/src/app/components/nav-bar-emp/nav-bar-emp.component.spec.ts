import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEmpComponent } from './nav-bar-emp.component';

describe('NavBarEmpComponent', () => {
  let component: NavBarEmpComponent;
  let fixture: ComponentFixture<NavBarEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

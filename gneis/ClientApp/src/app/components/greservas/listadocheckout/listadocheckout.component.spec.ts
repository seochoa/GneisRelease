import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocheckoutComponent } from './listadocheckout.component';

describe('ListadocheckoutComponent', () => {
  let component: ListadocheckoutComponent;
  let fixture: ComponentFixture<ListadocheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadocheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

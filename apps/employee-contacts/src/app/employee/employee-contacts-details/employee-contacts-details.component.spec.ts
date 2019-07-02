import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContactsDetailsComponent } from './employee-contacts-details.component';

describe('EmployeeContactsDetailsComponent', () => {
  let component: EmployeeContactsDetailsComponent;
  let fixture: ComponentFixture<EmployeeContactsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeContactsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContactsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

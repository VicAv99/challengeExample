import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContactsListComponent } from './employee-contacts-list.component';

describe('EmployeeContactsListComponent', () => {
  let component: EmployeeContactsListComponent;
  let fixture: ComponentFixture<EmployeeContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeContactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EmployeesContactsService } from './employees-contacts.service';

describe('EmployeesContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeesContactsService = TestBed.get(EmployeesContactsService);
    expect(service).toBeTruthy();
  });
});

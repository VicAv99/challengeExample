import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { EmployeeContact, EmployeesContactsService } from '@workspace/core-data';

@Component({
  selector: 'workspace-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeContacts$: Observable<EmployeeContact[]>

  constructor(
    private employeeContactsService: EmployeesContactsService
  ) { }

  ngOnInit() {
    this.employeeContacts$ = this.employeeContactsService.all();
  }

}

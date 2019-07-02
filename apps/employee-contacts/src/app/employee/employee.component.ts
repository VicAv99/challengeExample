import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { EmployeeContact, EmployeesContactsService } from '@workspace/core-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'workspace-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  form: FormGroup;
  employeeContact: EmployeeContact;
  employeeContacts$: Observable<EmployeeContact[]>

  constructor(
    private formBuilder: FormBuilder,
    private employeeContactsService: EmployeesContactsService
  ) { }

  ngOnInit() {
    this.initForm();
    this.employeeContacts$ = this.employeeContactsService.all();
  }

  select(employeeContact: EmployeeContact) {
    this.employeeContact = employeeContact;
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

}

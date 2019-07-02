import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { EmployeeContact, EmployeesContactsService } from '@workspace/core-data';

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
    this.getEmployeeContacts();
  }

  select(employeeContact: EmployeeContact) {
    this.employeeContact = employeeContact;
    this.form.patchValue(employeeContact);
  }

  getEmployeeContacts() {
    this.employeeContacts$ = this.employeeContactsService.all();
  }

  save(employeeContact: EmployeeContact) {
    employeeContact.id ?
      this.updateEmployeeContact(employeeContact)
      : this.createEmployeeContact(employeeContact);
  }

  createEmployeeContact(employeeContact: EmployeeContact) {
    this.employeeContactsService.create(employeeContact).subscribe(res => {
      this.getEmployeeContacts();
      this.reset();
    });
  }

  updateEmployeeContact(employeeContact: EmployeeContact) {
    this.employeeContactsService.update(employeeContact).subscribe(res => {
      this.getEmployeeContacts();
      this.reset();
    });
  }

  deleteEmployeeContact(employeeContactId: number) {
    this.employeeContactsService.delete(employeeContactId).subscribe(res => {
      this.getEmployeeContacts();
      this.reset();
    });
  }

  reset() {
    this.form.reset();
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

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EmployeeContact } from '@workspace/core-data';

@Component({
  selector: 'workspace-employee-contacts-list',
  templateUrl: './employee-contacts-list.component.html',
  styleUrls: ['./employee-contacts-list.component.scss']
})
export class EmployeeContactsListComponent {
  @Input() employeeContacts: EmployeeContact[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() {}

  selectEmployeeContact(employeeContact: EmployeeContact) {
    this.selected.emit(employeeContact);
  }

  deleteEmployeeContact(employeeContactId: number) {
    this.deleted.emit(employeeContactId);
  }

  stopPropagation(event: any) {
    event.stopImmediatePropagation();
  }
}

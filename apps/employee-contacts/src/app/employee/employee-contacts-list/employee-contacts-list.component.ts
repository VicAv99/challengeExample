import { Component, Input } from '@angular/core';

import { EmployeeContact } from '@workspace/core-data';

@Component({
  selector: 'workspace-employee-contacts-list',
  templateUrl: './employee-contacts-list.component.html',
  styleUrls: ['./employee-contacts-list.component.scss']
})
export class EmployeeContactsListComponent {
  @Input() employeeContacts: EmployeeContact[];
}

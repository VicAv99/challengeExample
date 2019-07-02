import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EmployeeContact } from '@workspace/core-data';

@Component({
  selector: 'workspace-employee-contacts-details',
  templateUrl: './employee-contacts-details.component.html',
  styleUrls: ['./employee-contacts-details.component.scss']
})
export class EmployeeContactsDetailsComponent {
  selectedEmployeeContact: EmployeeContact;
  @Input() group: FormGroup;
  @Input() set employeeContact(value: EmployeeContact) {
    this.selectedEmployeeContact = Object.assign({}, value);
  }

  determineIfUpdate() {
    return !!this.group.value.id;
  }

  displayError(control: string, errorType: string) {
    return this.group.get(control).hasError(errorType);
  }
}

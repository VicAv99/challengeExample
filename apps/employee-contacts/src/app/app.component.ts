import { Component } from '@angular/core';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employee Contacts';
  links = [
    {path: '/employee-contacts', icon: 'loyalty', label: 'Employee Contacts'}
  ];
}

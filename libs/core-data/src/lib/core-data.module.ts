import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesContactsService } from './employees/employees-contacts.service';

@NgModule({
  imports: [CommonModule],
  providers: [EmployeesContactsService]
})
export class CoreDataModule {}

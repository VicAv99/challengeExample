import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmployeesContactsService } from './employees/employees-contacts.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [EmployeesContactsService]
})
export class CoreDataModule {}

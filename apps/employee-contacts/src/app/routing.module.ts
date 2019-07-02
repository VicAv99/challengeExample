import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from '@workspace/ui-login';

const ROUTES: Routes = [
  {path: '', redirectTo: 'employee-contacts', pathMatch: 'full'},
  {path: 'employee-contacts', component: EmployeeComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'employee-contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule { }

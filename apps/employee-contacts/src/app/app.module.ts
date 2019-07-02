import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';
import { MaterialModule } from '@workspace/material';
import { CoreDataModule } from '@workspace/core-data';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeContactsListComponent } from './employee/employee-contacts-list/employee-contacts-list.component';
import { EmployeeContactsDetailsComponent } from './employee/employee-contacts-details/employee-contacts-details.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeContactsListComponent,
    EmployeeContactsDetailsComponent
  ],
  imports: [
    BrowserModule,
    CoreDataModule,
    MaterialModule,
    UiLoginModule,
    UiToolbarModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

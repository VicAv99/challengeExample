import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';
import { MaterialModule } from '@workspace/material';
import { CoreDataModule } from '@workspace/core-data';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreDataModule,
    MaterialModule,
    UiLoginModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

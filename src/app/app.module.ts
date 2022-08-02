import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClientComponent } from './configuration/client/client.component';
import { AppointmentComponent } from './configuration/appointment/appointment.component';
import { EmailComponent } from './configuration/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AppointmentComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

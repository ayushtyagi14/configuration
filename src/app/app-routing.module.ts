import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './configuration/client/client.component';
import { AppointmentComponent } from './configuration/appointment/appointment.component';
import { EmailComponent } from './configuration/email/email.component';

const routes: Routes = [{ path: 'client', component: ClientComponent }, { path: 'email', component: EmailComponent }, { path: 'appointment', component: AppointmentComponent }, { path: '', redirectTo: 'client', pathMatch: "full" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

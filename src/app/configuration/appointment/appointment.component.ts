import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faIdCard, faCalendarDay, faEnvelope, faChalkboardTeacher, faAngleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  faPen = faPen;
  faAngleDown = faAngleDown;
  faIdCard = faIdCard;
  faCalendarDay = faCalendarDay;
  faEnvelope = faEnvelope;
  faChalkboardTeacher = faChalkboardTeacher;

  goToClient() {
    this.router.navigate(['client'])
  }

  goToEmail() {
    this.router.navigate(['email']);
  }

  goToAppointment() {
    this.router.navigate(['appointment'])
  }

}

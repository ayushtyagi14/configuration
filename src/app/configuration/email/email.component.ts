import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faIdCard, faCalendarDay, faEnvelope, faChalkboardTeacher, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

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

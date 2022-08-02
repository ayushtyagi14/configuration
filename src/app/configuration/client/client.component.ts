import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faIdCard, faCalendarDay, faEnvelope, faChalkboardTeacher, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToClient() {
    this.router.navigate(['client'])
  }

  goToEmail() {
    this.router.navigate(['email']);
  }

  goToAppointment() {
    this.router.navigate(['appointment'])
  }

  faPen = faPen;
  faAngleDown = faAngleDown;
  faIdCard = faIdCard;
  faCalendarDay = faCalendarDay;
  faEnvelope = faEnvelope;
  faChalkboardTeacher = faChalkboardTeacher;

}

import { Component, OnInit } from '@angular/core';
import { ReservationEnum } from 'src/app/enums/enums-reservation-home';

@Component({
  selector: 'app-reservation-home',
  templateUrl: './reservation-home.component.html',
  styleUrls: ['./reservation-home.component.scss']
})
export class ReservationHomeComponent implements OnInit{

  title = ReservationEnum.title;
  description = ReservationEnum.description;

  constructor() {
  }

  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { HolidaysServiceService } from '../services/holidays-service.service';
import { Holiday } from './../models/Holiday';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  private holidays: Array<Holiday>;
  constructor(private holidayService: HolidaysServiceService) { }

  ngOnInit() {
    this.holidayService.getHolidays().then(holidays => {
      this.holidays = holidays;
    });
  }
}

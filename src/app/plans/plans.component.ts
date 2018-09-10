import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../services/holiday.service';
import { Holiday } from './../models/Holiday';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  private holidays: Array<Holiday>;
  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
    this.holidayService.getHolidays().then(holidays => {
      this.holidays = holidays;
    });
  }
}

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
  private status_info: String;
  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
    this.status_info = 'Trwa pobieranie danych...';
    this.holidayService.getHolidays().then(holidays => {
      if (holidays.length === 0) {
        this.status_info = 'Brak planow urlopowych.';
      } else {
        this.holidays = holidays;
        this.status_info = `Planow urlopowych: ${holidays.length}`;
      }
    }).catch(err => {
      this.status_info = err;
    });
  }
}

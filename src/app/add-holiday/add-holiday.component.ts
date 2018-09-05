import { Holiday } from './../models/Holiday';
import { Component, OnInit } from '@angular/core';
import { HolidaysServiceService } from '../services/holidays-service.service';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css']
})
export class AddHolidayComponent implements OnInit {
  private holiday_form = {
    name: 'Konrad',
    surename: 'Dzień',
    team: 'IT',
    from: undefined,
    to: undefined,
  }
  constructor(private holidayService: HolidaysServiceService) { }

  ngOnInit() {
  }
  addHoliday(): void {
    const {name, surename, team, from, to} = this.holiday_form;
    const new_holiday = new Holiday(name, surename, team, new Date(from), new Date(to));
    this.holidayService.addHoliday(new_holiday);
  }
}

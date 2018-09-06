import { Holiday } from './../models/Holiday';
import { Component, OnInit } from '@angular/core';
import { HolidaysServiceService } from '../services/holidays-service.service';

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css']
})
export class AddHolidayComponent implements OnInit {
  private current_date = new Date().toISOString().split('T')[0];
  private add_holiday_info = '';
  private holiday_form = {
    name: 'Konrad',
    surename: 'Dzień',
    team: 'IT',
    from: this.current_date,
    to: this.current_date,
  }
  constructor(private holidayService: HolidaysServiceService) { }

  ngOnInit() {
  }
  addHoliday(): void {
    const {name, surename, team, from, to} = this.holiday_form;
    const new_holiday = new Holiday(name, surename, team, new Date(from), new Date(to));
    this.holidayService.addHoliday(new_holiday).then(response => {
      this.add_holiday_info = response;
    }).catch(warning => {
      this.add_holiday_info = warning;
    });
  }
}

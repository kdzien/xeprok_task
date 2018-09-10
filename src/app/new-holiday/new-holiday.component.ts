import { Holiday } from './../models/Holiday';
import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../services/holiday.service';

@Component({
  selector: 'app-new-holiday',
  templateUrl: './new-holiday.component.html',
  styleUrls: ['./new-holiday.component.css']
})
export class NewHolidayComponent implements OnInit {
  private current_date = new Date().toISOString().split('T')[0];
  private add_holiday_info = '';
  private holiday_form = {
    name: 'Konrad',
    surename: 'Dzień',
    team: 'IT',
    from: this.current_date,
    to: this.current_date,
  }
  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
  }
  addHoliday(): void {
    this.add_holiday_info = 'Dodajawanie urlopu...';
    const {name, surename, team, from, to} = this.holiday_form;
    const new_holiday = new Holiday(name, surename, team, new Date(from), new Date(to));
    this.holidayService.addHoliday(new_holiday).then(response => {
      this.add_holiday_info = response;
    }).catch(warning => {
      this.add_holiday_info = warning;
    });
  }
}

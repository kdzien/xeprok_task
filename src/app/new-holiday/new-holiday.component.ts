import { Holiday } from './../models/Holiday';
import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../services/holiday.service';

@Component({
  selector: 'app-new-holiday',
  templateUrl: './new-holiday.component.html',
  styleUrls: ['./new-holiday.component.css']
})
export class NewHolidayComponent implements OnInit {
  private current_date = new Date().dateToString();
  private new_holiday_info = ' ';
  private button_disabled = false;
  private holiday_form = this.newForm();
  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
  }
  addHoliday(): void {
    this.new_holiday_info = 'Dodawanie urlopu...';
    this.button_disabled = !this.button_disabled;
    const {name, surename, team, from, to} = this.holiday_form;
    const new_holiday = new Holiday(name, surename, team, from ? new Date(from) : undefined, to ? new Date(to) : undefined);
    this.holidayService.addHoliday(new_holiday).then(response => {
      this.new_holiday_info = response;
      this.holiday_form = this.newForm();
    }).catch(err => {
      this.new_holiday_info = err;
    }).finally(() => {
      this.button_disabled = !this.button_disabled;
    });
  }
  private newForm() {
    return  {
      name: '',
      surename: '',
      team: '',
      from: undefined,
      to: undefined
    };
  }
}

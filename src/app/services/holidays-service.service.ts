import { Holiday } from './../models/Holiday';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HolidaysServiceService {

  private holidays: Array<Holiday> = [];
  constructor() {}

  getHolidays(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.holidays);
    });
  }
  addHoliday(holiday: Holiday): void {
    this.checkCorrectivity(holiday, this.holidays);
    this.holidays.push(holiday);
  }
  private checkCorrectivity(new_holiday, holidays) {
    const date_available = holidays.filter(holiday => new_holiday.team === holiday.team)
    .filter(holiday => new_holiday.from.isBetween(holiday.from, holiday.to) || new_holiday.to.isBetween(holiday.from, holiday.to));
    console.log(date_available);
  }
}
Date.prototype.isBetween = function(from, to) {
  console.log(this);
  if(this > from && this < to) {
    return true;
  }
  return false;
};

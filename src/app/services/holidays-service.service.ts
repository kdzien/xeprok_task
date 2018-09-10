import { Holiday } from './../models/Holiday';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
@Injectable({
  providedIn: 'root'
})
export class HolidaysServiceService {

  private holidays: Array<Holiday> = [];
  constructor(private httpService: HttpService) {}

  getHolidays(): Promise<any>{
    return new Promise((resolve,reject) => {
      this.httpService.getHolidays().subscribe( holidays => {
        this.holidays = holidays.map(holiday => new Holiday(holiday.name,holiday.surename,holiday.team, new Date(holiday.from), new Date(holiday.to)));
        resolve(this.holidays)
      })
    })
  }
  addHoliday(holiday: Holiday): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getHolidays().then(holidays => {
        if (holiday.to < holiday.from) {
          reject('Data do jest mniejsza niż data od');
        }
        if (this.checkCorrectivity(holiday, this.holidays)) {
          this.httpService.saveHoliday(holiday)
          resolve('Dodałes urlop');
        } else {
          reject('Nie możesz wziąć urlopu w tym terminie');
        }      
      })
    });
  }
  private checkCorrectivity(new_holiday, holidays) {
    const date_available = holidays.filter(holiday => new_holiday.team === holiday.team)
    .filter(holiday => new_holiday.from.isBetween(holiday.from, holiday.to) || new_holiday.to.isBetween(holiday.from, holiday.to));
    return date_available.length === 0 ? true : false;
  }
}
Date.prototype.isBetween = function(from, to) {
  console.log(this);
  if(this >= from && this <= to) {
    return true;
  }
  return false;
};

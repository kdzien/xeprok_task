import { Holiday } from './../models/Holiday';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import './../date-prototypes';
@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  private holidays: Array<Holiday> = [];
  constructor(private httpService: HttpService) {}

  getHolidays(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpService.getHolidays().subscribe(holidays => {
        // tslint:disable-next-line:max-line-length
        this.holidays = holidays.map(holiday => new Holiday(holiday.name, holiday.surename, holiday.team, new Date(holiday.from), new Date(holiday.to)));
        resolve(this.holidays);
      }, err => {
        reject(`Problem z połączeniem: ${err}`);
      });
    });
  }
  addHoliday(holiday: Holiday): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getHolidays().then(holidays => {
        const check_result = this.checkFields(holiday);
        if (check_result.length !== 0) {
          return reject(`Uzupełnij brakujące pola: ${check_result.join(', ')}`);
        } else {
          if (holiday.to < holiday.from) {
            return reject('Data do jest mniejsza niż data od');
          } else if (holiday.from.isWeekend(holiday.to)) {
            return reject('Urlop w weekend?');
          } else if (holiday.from.isFromPast()) {
            return reject('Wybrano datę z przeszłosci, lub dzisiejszą');
          } else if (this.checkDateAvailability(holiday, this.holidays)) {
            this.httpService.saveHoliday(holiday).subscribe(data => {
              return resolve('Dodano urlop.');
            }, err => {
              return reject(`Problem z połączeniem: ${err}`);
            });
          } else {
            return reject('Nie możesz wziąć urlopu w tym terminie.');
          }
        }
      });
    });
  }
  private checkDateAvailability(new_holiday, holidays) {
    const date_available =
    holidays.filter(holiday =>
      new_holiday.team === holiday.team)
    .filter(holiday =>
      holiday.from.dateToString() === holiday.to.dateToString() ? holiday.from.isBetween(new_holiday.from, new_holiday.to) :
      new_holiday.from.isBetween(holiday.from, holiday.to) || new_holiday.to.isBetween(holiday.from, holiday.to));
    return date_available.length === 0 ? true : false;
  }

  private checkFields(new_holiday) {
    const missed_arguments = [];
    Object.keys(new_holiday).forEach(elem => {
      if ( elem !== '_id' && !new_holiday[elem]) {
        missed_arguments.push(elem);
      }
    });
    return missed_arguments;
  }
}



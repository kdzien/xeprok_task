import { async, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Holiday } from 'src/app/models/Holiday';

import { HOLIDAYS, CORRECT_HOLIDAY, WRONG_HOLIDAYS, WEEKEND_HOLIDAY, PAST_DATE } from './../test_data/mock-persons';
import { HolidayService } from './holiday.service';
import { HttpService } from './http.service';

describe('HolidayService', () => {
  let holiday_service: HolidayService;
  let http_service_spy: jasmine.SpyObj<HttpService>;
  const correct_request_data: Holiday = CORRECT_HOLIDAY;
  const addResponse: Holiday = CORRECT_HOLIDAY;
  const getResponse: Holiday[] = HOLIDAYS;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpService', ['getHolidays', 'saveHoliday']);
    TestBed.configureTestingModule(
      {
        providers:[
          HolidayService,
          {provide: HttpService, useValue: spy}
        ]
    });
    holiday_service = TestBed.get(HolidayService);
    http_service_spy = TestBed.get(HttpService);
    http_service_spy.getHolidays.and.returnValue(of(getResponse));
    http_service_spy.saveHoliday.and.returnValue(of(addResponse));
  });
  it('should call getHolidays and return list of users', async(() => {
    const response: Holiday[] = HOLIDAYS;
    http_service_spy.getHolidays.and.returnValue(of(response));
    holiday_service.getHolidays().then(holidays => {
      expect(holidays.length).toBe(2);
    });
  }));
  describe('should call addHoliday', () => {
    it('and return value "Dodano urlop."', async(() => {
      holiday_service.addHoliday(correct_request_data).then((resp) => {
        expect(resp).toBe('Dodano urlop.');
      }).catch(err => {
      });
    }));
    it('and return value "Urlop w weekend?"', async(() => {
      holiday_service.addHoliday(WEEKEND_HOLIDAY).then((resp) => {
        expect(resp).toBe('Urlop w weekend?');
      }).catch(err => {
        expect(err).toBe('Urlop w weekend?');
      });
    }));
    it('and return value "Data z przeszlosci"', async(() => {
      holiday_service.addHoliday(PAST_DATE).then((resp) => {
        expect(resp).toBe('Wybrano datę z przeszłosci, lub dzisiejszą');
      }).catch(err => {
        expect(err).toBe('Wybrano datę z przeszłosci, lub dzisiejszą');
      });
    }));
    WRONG_HOLIDAYS.forEach(elem => {
      it(`and return value "Nie możesz wziąć urlopu w tym terminie." ${elem.from.dateToString()} - ${elem.to.dateToString()}`, async(() => {
        holiday_service.addHoliday(elem).then(res => {
          expect(res).toBe('Nie możesz wziąć urlopu w tym terminie.');
        }).catch(err => {
          expect(err).toBe('Nie możesz wziąć urlopu w tym terminie.');
        })
      }));
    })
  });
});

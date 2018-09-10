import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Holiday } from 'src/app/models/Holiday';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private URL_DB = 'https://api.mlab.com/api/1/databases/korpex_holidays/collections/holidays';
  private param = new HttpParams().set('apiKey', 'hIfSGD4Yl2MCQATpWMzlhMm5yaybuPc0');

  constructor(private http: HttpClient) {}

  getHolidays(): Observable<Array<Holiday>> {
    return this.http.get<Array<Holiday>>(this.URL_DB, {params: this.param});
  }
  saveHoliday(holiday: Holiday): Observable<Holiday> {
    return this.http.post<Holiday>(this.URL_DB, holiday, { params: this.param});
  }
}

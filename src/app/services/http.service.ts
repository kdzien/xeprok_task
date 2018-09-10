import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Holiday } from 'src/app/models/Holiday';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private URL_DB = 'https://api.mlab.com/api/1/databases/korpex_holidays/collections/holidays';
  private param = new HttpParams().set('apiKey', 'hIfSGD4Yl2MCQATpWMzlhMm5yaybuPc0');

  constructor(private http: HttpClient) { 
    this.getHolidays();
  }

  getHolidays(){
    this.http.get(this.URL_DB, {params:this.param}) 
    .subscribe( tasks => {
      console.log(tasks)
    })
  }
  saveHoliday(holiday: Holiday){
    this.http.post(this.URL_DB, holiday, { params: this.param}).subscribe(list => {
      console.log(list)
    })
  }
}

import { Component } from '@angular/core';
import { HolidayService } from './services/holiday.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HolidayService]
})
export class AppComponent {
  title = 'app';
}

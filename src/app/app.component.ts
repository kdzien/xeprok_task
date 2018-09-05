import { Component } from '@angular/core';
import { HolidaysServiceService } from './services/holidays-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HolidaysServiceService]
})
export class AppComponent {
  title = 'app';
}

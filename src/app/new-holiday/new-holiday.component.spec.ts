import { CORRECT_HOLIDAY } from './../test_data/mock-persons';
import { HolidayService } from './../services/holiday.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHolidayComponent } from './new-holiday.component';
import { FormsModule } from '@angular/forms';
import { shim } from 'promise.prototype.finally';
import { By } from '@angular/platform-browser';



describe('NewHolidayComponent', () => {
  let holiday_service_spy: jasmine.SpyObj<HolidayService>;
  let component: NewHolidayComponent;
  let fixture: ComponentFixture<NewHolidayComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('HolidayService', ['addHoliday']);
    TestBed.configureTestingModule({
      declarations: [ NewHolidayComponent ],
      imports: [FormsModule],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
    holiday_service_spy = TestBed.get(HolidayService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('should change value of add status after button click', () => {
    const button = fixture.debugElement.query(By.css('.btn')).nativeElement;
    const statusInfo = fixture.debugElement.query(By.css('.statusInfo')).nativeElement;
    expect(statusInfo.textContent).toBe(' ');
    button.click();
    fixture.detectChanges();
    expect(statusInfo).toBeTruthy();
  });
});

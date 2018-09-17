import { CORRECT_HOLIDAY } from './../test_data/mock-persons';
import { HolidayService } from './../services/holiday.service';
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
      providers:[
        {provide: HolidayService, useValue: spy}
      ]
    }).compileComponents();

    holiday_service_spy = TestBed.get(HolidayService);
  }));

  beforeEach(() => {
    holiday_service_spy.addHoliday.and.returnValue(Promise.resolve(CORRECT_HOLIDAY));
    fixture = TestBed.createComponent(NewHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should change value of add status after add_holiday button click and disable button', () => {
    const button = fixture.debugElement.query(By.css('.btn')).nativeElement;
    const statusInfo = fixture.debugElement.query(By.css('.statusInfo')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(button.disabled).toBeTruthy();
    expect(statusInfo.textContent.length).toBeGreaterThan(2);
  });
});

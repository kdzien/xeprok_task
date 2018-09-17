import { HOLIDAYS } from './../test_data/mock-persons';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansComponent } from './plans.component';
import { HolidayService } from '../services/holiday.service';
import { PlanComponent } from '../plan/plan.component';
import { HttpService } from '../services/http.service';

describe('PlansComponent', () => {
  let holiday_service_spy: jasmine.SpyObj<HolidayService>;
  let component: PlansComponent;
  let fixture: ComponentFixture<PlansComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('HolidayService', ['getHolidays']);
    TestBed.configureTestingModule({
      declarations: [ PlansComponent, PlanComponent ],
      providers:[
        {provide: HolidayService, useValue: spy}
      ]
    })
    .compileComponents();
    holiday_service_spy = TestBed.get(HolidayService);
    holiday_service_spy.getHolidays.and.returnValue(Promise.resolve(HOLIDAYS));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

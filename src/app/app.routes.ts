import { Routes } from '@angular/router';
import { NewHolidayComponent } from './new-holiday/new-holiday.component';
import { PlansComponent } from './plans/plans.component';

export const app_routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'plans'},
  { path: 'plans', component: PlansComponent},
  { path: 'add-holiday', component: NewHolidayComponent}
];

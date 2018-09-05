import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { PlansComponent } from './plans/plans.component';
import { PlanComponent } from './plan/plan.component';
import { app_routes } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    AddHolidayComponent,
    PlansComponent,
    PlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      app_routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  @Input()
  private holiday;
  constructor() { }

  ngOnInit() {
  }

}

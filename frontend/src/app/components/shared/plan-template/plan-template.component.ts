import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-template',
  templateUrl: './plan-template.component.html',
  styleUrls: ['./plan-template.component.css']
})
export class PlanTemplateComponent implements OnInit {
  @Input() planObject;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.css']
})
export class FeedbackCardComponent implements OnInit {

  @Input() userName;
  @Input() feedbackTitle;
  @Input() feedbackDescription;
  @Input() rate;
  constructor() { }

  ngOnInit(): void {
   
  }

}

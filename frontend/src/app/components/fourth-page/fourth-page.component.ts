import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {

  feedbacks=[
    {userName:"Yaswanth", feedbackTitle:"Boost Performance", feedbackDescription:"Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.", rate:4},
    {userName:"Yaswanth", feedbackTitle:"Boost Performance", feedbackDescription:"Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.", rate:5},
    {userName:"Yaswanth", feedbackTitle:"Boost Performance", feedbackDescription:"Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.", rate:2}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  cardsInfo=[
    {title:"Vegetarian", imageUrl:"assets/card1.jpg"},
    {title:"Lunch", imageUrl:"assets/card1.jpg"},
    {title:"Dinner", imageUrl:"assets/card1.jpg"},
    {title:"Sample2", imageUrl:"assets/card1.jpg"},
    {title:"Fast food", imageUrl:"assets/card1.jpg"},
    {title:"Snacks", imageUrl:"assets/card1.jpg"},
    {title:"Masalas", imageUrl:"assets/card1.jpg"},
    {title:"Sample4", imageUrl:"assets/card1.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

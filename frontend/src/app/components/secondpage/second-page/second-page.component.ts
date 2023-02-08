import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  products=[
    {name:"Whopper",weight:"200gr,616kcal",price:4,image:"/assets/whopper.png"},
    {name:"Whopper",weight:"200gr,616kcal",price:4,image:"/assets/whopper.png"},
    {name:"Whopper",weight:"200gr,616kcal",price:4,image:"/assets/whopper.png"},
    {name:"Whopper",weight:"200gr,616kcal",price:4,image:"/assets/whopper.png"},
    {name:"Whopper",weight:"200gr,616kcal",price:4,image:"/assets/whopper.png"},
    {name:"Whopper",weight:"200gr,616kcal",price:4,image:"/assets/whopper.png"},
  
  ]
  constructor() { }

  ngOnInit(): void {
    
    document.getElementById("option1").style.borderBottom="3px solid #8D448B";
  }
  onCategorySelected(optionNumber:number){
    this.unSelectAllCategories();
    document.getElementById("option"+optionNumber).style.borderBottom="3px solid #8D448B";
  }



  unSelectAllCategories(){
    document.getElementById("option1").style.borderBottom="0";
    document.getElementById("option2").style.borderBottom="0";
    document.getElementById("option3").style.borderBottom="0";
    document.getElementById("option4").style.borderBottom="0";
    document.getElementById("option5").style.borderBottom="0";
  }

}

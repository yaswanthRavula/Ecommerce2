import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-page',
  templateUrl: './fifth-page.component.html',
  styleUrls: ['./fifth-page.component.css']
})
export class FifthPageComponent implements OnInit {

  question1Flag=false;
  question2Flag=false;
  question3Flag=false;
  question4Flag=false;

  constructor() { }

  ngOnInit(): void {
  }

  onQuestionClicked(n:number){
    if(n==1){
        this.question1Flag=!this.question1Flag;
        if(this.question1Flag){
          document.getElementById("quest-desc-1").style.height="fit-content";
          document.getElementById("quest-desc-1").style.display="flex";
        }else{
          document.getElementById("quest-desc-1").style.height="0";
          document.getElementById("quest-desc-1").style.display="none";
        }
    }else if(n==2){
      this.question2Flag=!this.question1Flag;
    }
    else if(n==3){
      this.question3Flag=!this.question1Flag;
    } else{
      this.question4Flag=!this.question1Flag;
    }
  }

}

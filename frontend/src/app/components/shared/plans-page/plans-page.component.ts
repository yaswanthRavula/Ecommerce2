import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans-page',
  templateUrl: './plans-page.component.html',
  styleUrls: ['./plans-page.component.css']
})
export class PlansPageComponent implements OnInit {
  monthly1={
    title:"For Team Pack",
    greenOptions:["Ultimate access to all course, exercises and assessments","Free acess for all kind of exercise corrections with downloads.","Total assessment corrections with free download access system"],
    redOptions:["Unlimited download of courses on the mobile app contents"],
    price:"29.99/mo",
    recommended:false
  }
  montlhy2={
    title:"For Organization Pack",
    greenOptions:["Ultimate access to all course, exercises and assessments","Free acess for all kind of exercise corrections with downloads.","Total assessment corrections with free download access system","Unlimited download of courses on the mobile app contents"],
    price:"49.99/mo",
    recommended:true
  }
  yearly2={
    title:"For Organization Yearly",
    greenOptions:["Ultimate access to all course, exercises and assessments","Free acess for all kind of exercise corrections with downloads.","Total assessment corrections with free download access system","Unlimited download of courses on the mobile app contents"],
    price:"49.99/year",
    recommended:true
  }
  yearly1={
    title:"For Team Yearly",
    greenOptions:["Ultimate access to all course, exercises and assessments","Free acess for all kind of exercise corrections with downloads.","Total assessment corrections with free download access system"],
    redOptions:["Unlimited download of courses on the mobile app contents"],
    price:"29.99/year",
    recommended:false
  }
plan1;
 plan2;

  constructor() { }

  ngOnInit(): void {
   this.itemSwitched(1);
  }

  itemSwitched(num){
    document.getElementById("switch-item-1").className="switch-item";
    document.getElementById("switch-item-2").className="switch-item";
    document.getElementById("switch-item-"+num).className="switch-item-active";
    if(num==1){
      this.plan1=this.monthly1;
      this.plan2=this.montlhy2;
    }
    else{
      this.plan1=this.yearly1;
      this.plan2=this.yearly2;
    }
  }

}

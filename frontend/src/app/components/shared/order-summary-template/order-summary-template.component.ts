import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-order-summary-template',
  templateUrl: './order-summary-template.component.html',
  styleUrls: ['./order-summary-template.component.css']
})
export class OrderSummaryTemplateComponent implements OnInit {


  orderItems=[
    ["Price",319.98],
    ["Discount",31.9],
    ["Shipping", "Free"]

  ]
  constructor(private router:Router) { }
  var=0;

  ngOnInit(): void {
  }
  goToAddress()
  {
    
    if(this.router.url =="/cart"){
      this.router.navigate(['/address']);
      this.var=1;
    }else if(this.router.url =="/address"){
      this.router.navigate(['/shipping'])
    }else if(this.router.url =="/shipping"){
       alert("Payment is not yet completed")
    }
  }

}

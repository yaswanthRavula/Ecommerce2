import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}

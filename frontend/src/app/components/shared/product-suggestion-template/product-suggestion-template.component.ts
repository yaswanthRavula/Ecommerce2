import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-suggestion-template',
  templateUrl: './product-suggestion-template.component.html',
  styleUrls: ['./product-suggestion-template.component.css']
})
export class ProductSuggestionTemplateComponent implements OnInit {
 
 @Input() name: any;
 @Input() weight: any;
 @Input() price: any;
 @Input() imageUrl: any;
 

  constructor() { }

  ngOnInit(): void {
  }

}

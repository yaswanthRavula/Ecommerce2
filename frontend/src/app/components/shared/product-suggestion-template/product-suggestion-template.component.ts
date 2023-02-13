import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
 

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToProductDetails(){
      this.route.navigate(['/product-detail'])
  }

}

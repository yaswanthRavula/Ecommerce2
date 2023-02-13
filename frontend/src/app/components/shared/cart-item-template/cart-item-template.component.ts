import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item-template',
  templateUrl: './cart-item-template.component.html',
  styleUrls: ['./cart-item-template.component.css']
})
export class CartItemTemplateComponent implements OnInit {
 
  quantity=1;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  increaseQuantity(){
    this.quantity=this.quantity+1

  }
  decreaseQuantity(){
    if(this.quantity>1){
      this.quantity=this.quantity-1;
    }
  }
  goToProductDetail(){
     this.route.navigate(['/product-detail'])
  }

}

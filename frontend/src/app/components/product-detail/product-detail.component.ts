import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  category="chair";
  productName="Meryl Lounge Chair";
  price=149.99;
  rate=2;
  quantity=1;
  allImageURLs=["/assets/whopper.png","/assets/image.png","/assets/whopper.png","/assets/whopper.png"];
  activeImageUrl=this.allImageURLs[0];
  feature=["Free 2-5 day Shipping", "Tool-free assembly", "30-day trail"]
  constructor(private location: Location) { }

  ngOnInit(): void {
    
  }
  imageClicked(imageUrl,i:number){
    this.activeImageUrl=imageUrl;
    for(var n=0;n<4;n++){
      document.getElementById("image-"+n).style.border="1px solid rgba(128, 128, 128, 0.195)";
    }
    document.getElementById("image-"+i).style.border="1px solid #8D448B";
  }
  onBackClicked(){
     this.location.back();
  }

}

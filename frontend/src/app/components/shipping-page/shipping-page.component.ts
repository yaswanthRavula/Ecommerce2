import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-shipping-page',
  templateUrl: './shipping-page.component.html',
  styleUrls: ['./shipping-page.component.css']
})
export class ShippingPageComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  goToAddress(){
        this.router.navigate(['/address'])
  }

}

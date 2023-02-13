import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router) { }
  navOpen=false;

  navOptions=["Home","Shop","Reviews","Membership","Special Orders","Contact Us","FAQ"]
  ngOnInit(): void {
  }
  openNav(){
      this.navOpen=!this.navOpen;
  }
  goToPricing(){
    this.route.navigate(['/pricing']);
  }
  onOptionClicked(i){
    switch(i){
      case "Home": this.route.navigate(['/Home']);
                   break;
      case "Shop": this.route.navigate(['/Home']);
                   break;
      case "Reviews": this.route.navigate(['/Home']);
                   break;
      case "Membership": this.route.navigate(['/pricing']);
                   break;
      case "Special Orders": this.route.navigate(['/Home']);
                   break;
      case "Contact Us": this.route.navigate(['/Home']);
                   break;
      case "FAQ": this.route.navigate(['/Home']);
                   break;
                   
                   
    }
   

  }
  goToCart(){
    this.route.navigate(['/cart'])
  }

}

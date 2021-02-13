import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem('user'));
    if(!user)
      this.routeNavigation('login');


  }
  logout(){
    localStorage.removeItem('user');
    this.routeNavigation('login');
  }

  routeNavigation(url){
    return this.router.navigate([url]);
  }

}

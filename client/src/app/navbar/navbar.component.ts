import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  model: any = {}
  loggedIn = false;

  constructor(private accountService: AccountService, private router: Router){}
  
  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe({
      next: user => this.loggedIn = !!user,
      error: error => console.log(error)
    });
  }
  
  login(){
    this.router.navigateByUrl('login')
  }

  logout(){
    this.accountService.logout();
    this.loggedIn = false;
  }
  
  
}

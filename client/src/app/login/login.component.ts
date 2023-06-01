import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {}
  title: string = 'Login Page';

  constructor(private accountService: AccountService){ }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      }
    })
    console.log(this.model);
  }
}

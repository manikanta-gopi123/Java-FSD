import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router) {}

  login() {
    
    const isValidLogin = this.username === 'admin' && this.password === 'admin';

    if (isValidLogin) {
      
      this.router.navigate(['/employees']);
    } else {
      
      alert('Invalid credentials. Please try again.');
    }
  }

}

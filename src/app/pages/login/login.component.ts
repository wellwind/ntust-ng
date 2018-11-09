import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    account: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.user).subscribe((result: { token: string }) => {
      if (result) {
        localStorage.setItem('token', result.token);
        this.router.navigate(['/']);
      } else {
        alert('登入失敗');
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}

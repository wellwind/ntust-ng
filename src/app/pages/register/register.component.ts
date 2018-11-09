import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    account: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  register() {
    this.authService
      .register(this.user)
      .subscribe((result: { success: boolean }) => {
        if (result.success) {
          alert('註冊成功');
          this.router.navigate(['/']);
        } else {
          alert('註冊失敗');
        }
      });
  }
}

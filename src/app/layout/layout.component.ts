import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  get isLogin() {
    return this.authService.isLogin();
  }

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.removeToken();
    alert('已登出');
  }
}

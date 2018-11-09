import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  get isLogin() {
    return this.authService.isLogin();
  }

  products: any[];

  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  checkout() {
    this.productService.createOrder([1, 2]).subscribe(result => {
      if (result.success) {
        alert('完成結帳');
      } else {
        alert('結帳失敗');
      }
    });
  }
}

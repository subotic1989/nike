import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../service/cart.service';
import { ProductInterface } from '../types/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  public products: ProductInterface[] = [];
  public sumProducts: number = 0;
  subscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): number {
    let total = 0;

    this.subscription = this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.sumProducts = this.cartService.getTotalPrice();

      res.forEach((el: any) => {
        total += el.total;
      });
    });
    return total;
  }

  onRemoveItem(id: string) {
    this.cartService.removeCartItem(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

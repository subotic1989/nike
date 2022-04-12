import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
import { CartService } from '../service/cart.service';
import { ProductInterface } from '../types/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  public products: ProductInterface[] = [];
  onDestroy$ = new Subject();
  isDialog: boolean = true;
  currentItem: string;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    this.cartService.productList
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((res) => {
        this.products = res;
      });
  }

  get test() {
    let total = 0;

    this.cartService.productList
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((res) =>
        res.forEach((el: ProductInterface) => {
          total += el.total;
        })
      );
    return total;
  }

  onRemoveItem(id: string) {
    this.currentItem = id;
    this.isDialog = false;
  }

  deleteItemEvent(event: Event) {
    this.cartService.removeCartItem(this.currentItem);
    this.isDialog = true;
  }

  cancelEvent(event: Event) {
    this.isDialog = true;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
  }
}

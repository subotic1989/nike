import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CartService } from '../service/cart.service';
import { ProductInterface } from '../types/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  public products: ProductInterface[] = [];

  isDialog: boolean = true;
  currentItemId: string;

  onDestroy$ = new Subject();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    this.cartService.productList
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((products) => (this.products = products));
  }

  get totalSummary() {
    let total = 0;
    this.cartService.productList
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((item) =>
        item.forEach((el: ProductInterface) => (total += el.total))
      );
    return total;
  }

  onDelete(itemId: string) {
    this.currentItemId = itemId;
    this.isDialog = false;
  }

  confirmDelete() {
    this.cartService.removeCartItem(this.currentItemId);
    this.isDialog = true;
  }

  cancelDelete() {
    this.isDialog = true;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
  }
}

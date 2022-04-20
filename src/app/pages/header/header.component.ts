import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isClosed: boolean = false;
  public totalItem: number = 0;

  onDestroy$ = new Subject();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.cartService.productList
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => (this.totalItem = this.cartService.getQuantity()));
  }

  onClose() {
    this.isClosed = false;
  }

  onOpen() {
    this.isClosed = true;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
  }
}

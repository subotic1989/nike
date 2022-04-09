import { HostListener, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isClosed: boolean = false;
  public totalItem: number = 0;
  subscription: Subscription;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.subscription = this.cartService.getProducts().subscribe((res) => {
      this.totalItem = this.cartService.getQuantity();
    });
  }

  onClose() {
    this.isClosed = false;
  }

  onOpen() {
    this.isClosed = true;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  test(ev: any) {
    // this.isClosed = false;
    // document.querySelectorAll('.mobile li').forEach((el) => {
    //   el.addEventListener('click', () => {
    //     console.log(el);
    //   });
    // });
  }

  @HostListener('document:click', ['$event']) documentClickEvent(
    e: MouseEvent
  ) {
    // (e.target as Element).closest('.mobile li')?.classList.add('test');

    (e.target as Element).closest('ul')?.addEventListener('click', (e) => {
      this.isClosed = false;
    });
  }
}

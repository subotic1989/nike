import { Injectable } from '@angular/core';
import { LocalStorageService } from '@app/shared/utils/localStorage.service';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from '../types/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: ProductInterface[] = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(private localStorageService: LocalStorageService) {
    let cartFromLocalStorage = this.localStorageService.get('cart');
    if (cartFromLocalStorage != null) {
      this.cartItemList = cartFromLocalStorage;
      this.productList.next(cartFromLocalStorage);
    }
  }

  addToCart(product: ProductInterface) {
    const existing = this.cartItemList.find(
      (el) => el.eventId == product.eventId && el.size == product.size
    );

    if (existing) {
      // let test = this.cartItemList.findIndex(
      //   (el) => el.eventId == product.eventId
      // );
      // this.cartItemList[test].quantity += product.quantity;
      // this.cartItemList[test].total =
      //   this.cartItemList[test].quantity * product.price;
      existing.quantity += product.quantity;
      existing.total += product.quantity * product.price;
    } else {
      this.cartItemList.push(product);
    }

    this.productList.next(this.cartItemList.slice());
    this.getQuantity();
    this.localStorageService.set('cart', this.cartItemList);
  }

  getQuantity(): number {
    let sum = 0;
    this.cartItemList.map((item: ProductInterface) => {
      sum += item.quantity;
    });
    return sum;
  }

  removeCartItem(id: string) {
    this.cartItemList.map((item: ProductInterface, index: number) => {
      if (id === item.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList.slice());
    this.localStorageService.set('cart', this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}

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

  constructor(private lsService: LocalStorageService) {
    let cartFromLocalStorage = this.lsService.get('cart');
    if (cartFromLocalStorage != null) {
      this.cartItemList = cartFromLocalStorage;
      this.productList.next(cartFromLocalStorage);
    }
  }

  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: ProductInterface) {
    let duplicate = this.cartItemList.find(
      (el) => el.eventId == product.eventId && el.size == product.size
    );

    if (duplicate) {
      let test = this.cartItemList.findIndex(
        (el) => el.eventId == product.eventId
      );
      this.cartItemList[test].quantity += product.quantity;
      this.cartItemList[test].total =
        this.cartItemList[test].quantity * product.price;
    } else {
      this.cartItemList.push(product);
    }

    this.productList.next(this.cartItemList.slice());
    this.getTotalPrice();
    this.getQuantity();
    this.lsService.set('cart', this.cartItemList);
  }

  getTotalPrice(): number {
    let sum = 0;
    this.cartItemList.map((item: ProductInterface) => {
      sum += item.price;
    });
    return sum;
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
    this.lsService.set('cart', this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}

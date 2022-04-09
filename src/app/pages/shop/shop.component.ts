import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
import { ProductInterface } from '../types/product.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private afs: AngularFirestore) {}

  products: ProductInterface[];

  ngOnInit(): void {
    this.subscription = this.afs
      .collection<any>('new-collection')
      .valueChanges({ idField: 'eventId' })
      .subscribe((products: ProductInterface[]) => {
        this.products = products;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

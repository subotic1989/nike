import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
import { ProductInterface } from '../types/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private afs: AngularFirestore) {}

  products: ProductInterface[];

  ngOnInit(): void {
    this.subscription = this.afs
      .collection('new-collection')
      .valueChanges({ idField: 'eventId' })
      .subscribe((products: any[]) => {
        this.products = products;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

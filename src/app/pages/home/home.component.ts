import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject, takeUntil } from 'rxjs';
import { ProductInterface } from '../types/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject();
  products: ProductInterface[] = [];

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.afs
      .collection('new-collection')
      .valueChanges({ idField: 'eventId' })
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((products: any[]) => (this.products = products));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
  }
}

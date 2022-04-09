import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from '@app/pages/types/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() chapter: string;
  @Input() subchapter: string;
  @Input() products: ProductInterface[];

  limit = '0 300 price';
  stars = 'price';

  constructor() {}

  ngOnInit(): void {}

  counter(i: number) {
    return new Array(i);
  }
  test(e: any) {
    this.limit = e;
  }
}

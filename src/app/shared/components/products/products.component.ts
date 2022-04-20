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

  public limit: string = '0 300 price';

  constructor() {}

  ngOnInit(): void {}

  selectedValue(limitVAlue: string) {
    this.limit = limitVAlue;
  }

  counter(i: number) {
    return new Array(i);
  }
}

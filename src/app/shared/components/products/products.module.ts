import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { ProductsPipe } from './products.pipe';

@NgModule({
  declarations: [ProductsComponent, ProductsPipe],
  imports: [CommonModule, RouterModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}

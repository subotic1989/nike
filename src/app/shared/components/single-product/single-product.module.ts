import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleProductRoutingModule } from './single-product-routing.module';
import { SingleProductComponent } from './single-product.component';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';
import { BannerSaleModule } from '../banner-sale/banner-sale.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SingleProductComponent],
  imports: [
    CommonModule,
    SingleProductRoutingModule,
    ButtonPrimaryModule,
    BannerSaleModule,
    ReactiveFormsModule,
  ],
})
export class SingleProductModule {}

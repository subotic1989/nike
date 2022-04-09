import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { BannerWelcomeModule } from '@app/shared/components/banner-welcome/banner-welcome.module';
import { ProductsModule } from '@app/shared/components/products/products.module';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    BannerWelcomeModule,
    ProductsModule,
  ],
})
export class ShopModule {}

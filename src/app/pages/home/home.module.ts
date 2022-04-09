import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroModule } from './components/hero/hero.module';
import { FeaturesModule } from '@app/shared/components/features/features.module';
import { ProductsModule } from '@app/shared/components/products/products.module';
import { BannerSaleModule } from '@app/shared/components/banner-sale/banner-sale.module';
import { Banner2Module } from './components/banner2/banner2.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroModule,
    FeaturesModule,
    ProductsModule,
    BannerSaleModule,
    Banner2Module,
  ],
})
export class HomeModule {}

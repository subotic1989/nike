import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { BannerWelcomeModule } from '@app/shared/components/banner-welcome/banner-welcome.module';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';
import { CartService } from '../service/cart.service';
import { RouterModule } from '@angular/router';
import { DialogModule } from '@app/shared/components/dialog/dialog.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    BannerWelcomeModule,
    ButtonPrimaryModule,
    RouterModule,
    DialogModule,
  ],
})
export class CartModule {}

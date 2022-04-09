import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { CartService } from '../service/cart.service';
import { HeaderDirective } from './header.directive';

@NgModule({
  declarations: [HeaderComponent, HeaderDirective],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
  providers: [CartService],
})
export class HeaderModule {}

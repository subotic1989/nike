import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerWelcomeComponent } from './banner-welcome.component';

@NgModule({
  declarations: [BannerWelcomeComponent],
  imports: [CommonModule],
  exports: [BannerWelcomeComponent],
})
export class BannerWelcomeModule {}

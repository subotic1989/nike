import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { BannerWelcomeModule } from '@app/shared/components/banner-welcome/banner-welcome.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, BannerWelcomeModule],
})
export class AboutModule {}

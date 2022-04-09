import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BannerWelcomeModule } from '@app/shared/components/banner-welcome/banner-welcome.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, BannerWelcomeModule],
})
export class BlogModule {}

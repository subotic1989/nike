import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { BannerWelcomeModule } from '@app/shared/components/banner-welcome/banner-welcome.module';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    BannerWelcomeModule,
    ButtonPrimaryModule,
  ],
})
export class ContactModule {}

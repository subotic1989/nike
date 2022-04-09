import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, ButtonPrimaryModule],
  exports: [HeroComponent],
})
export class HeroModule {}

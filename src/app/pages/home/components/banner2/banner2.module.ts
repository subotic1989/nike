import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Banner2Component } from './banner2.component';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';

@NgModule({
  declarations: [Banner2Component],
  imports: [CommonModule, ButtonPrimaryModule],
  exports: [Banner2Component],
})
export class Banner2Module {}

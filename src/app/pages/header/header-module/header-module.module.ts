import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendlyModalHomeModuleModule } from '../../home/components/calendly-modal-home/calendly-modal-home-module/calendly-modal-home-module.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    CalendlyModalHomeModuleModule
  ],
  exports : [
    HeaderComponent
  ]
})
export class HeaderModuleModule { }

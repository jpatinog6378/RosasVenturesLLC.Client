import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendlyModalHomeComponent } from '../calendly-modal-home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CalendlyModalHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    CalendlyModalHomeComponent
  ]
})
export class CalendlyModalHomeModuleModule { }

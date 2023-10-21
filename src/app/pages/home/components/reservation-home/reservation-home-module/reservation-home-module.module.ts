import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationHomeComponent } from '../reservation-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendlyModalHomeModuleModule } from '../../calendly-modal-home/calendly-modal-home-module/calendly-modal-home-module.module';



@NgModule({
  declarations: [
    ReservationHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CalendlyModalHomeModuleModule
  ],
  exports : [
    ReservationHomeComponent
  ]
})
export class ReservationHomeModuleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from '../home.component';
import { CarrucelHomeModuleModule } from '../components/carrucel-home/carrucel-home-module/carrucel-home-module.module';
import { ServicesHomeModuleModule } from '../components/services-home/services-home-module/services-home-module.module';
import { ReservationHomeModuleModule } from '../components/reservation-home/reservation-home-module/reservation-home-module.module';
import { ContactFormHomeModuleModule } from '../components/contact-form-home/contact-form-home-module/contact-form-home-module.module';
import { CalendlyModalHomeModuleModule } from '../components/calendly-modal-home/calendly-modal-home-module/calendly-modal-home-module.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, 
    SharedModule,
    CarrucelHomeModuleModule,
    ServicesHomeModuleModule,
    ReservationHomeModuleModule,
    ContactFormHomeModuleModule,
    CalendlyModalHomeModuleModule
  ],
  exports :[
    HomeComponent
  ]
})
export class HomeModuleModule { }

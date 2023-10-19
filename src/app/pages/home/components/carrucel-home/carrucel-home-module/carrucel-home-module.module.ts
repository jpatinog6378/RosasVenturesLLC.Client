import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarrucelHomeComponent } from '../carrucel-home.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


@NgModule({
  declarations: [CarrucelHomeComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    CarrucelHomeComponent
  ]
})
export class CarrucelHomeModuleModule { }

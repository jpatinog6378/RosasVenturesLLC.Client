import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from '../home.component';
import { CarrucelHomeModuleModule } from '../components/carrucel-home/carrucel-home-module/carrucel-home-module.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, 
    SharedModule,
    CarrucelHomeModuleModule
  ],
  exports :[
    HomeComponent
  ]
})
export class HomeModuleModule { }

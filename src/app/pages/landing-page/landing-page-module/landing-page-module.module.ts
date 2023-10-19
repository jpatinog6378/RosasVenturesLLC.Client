import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from '../landing-page.component';
import { RouterModule } from '@angular/router';
import { HeaderModuleModule } from '../../header/header-module/header-module.module';
import { FooterModuleModule } from '../../footer/footer-module/footer-module.module';
import { HomeModuleModule } from '../../home/home-module/home-module.module';
import { CarrucelHomeModuleModule } from '../../home/components/carrucel-home/carrucel-home-module/carrucel-home-module.module';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    RouterModule,
    CommonModule,
    HeaderModuleModule,
    FooterModuleModule,
    HomeModuleModule,
    CarrucelHomeModuleModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModuleModule { }

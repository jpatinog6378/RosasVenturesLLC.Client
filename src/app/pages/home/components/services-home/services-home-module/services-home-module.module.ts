import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesHomeComponent } from '../services-home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ServicesHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    ServicesHomeComponent
  ]
})
export class ServicesHomeModuleModule { }

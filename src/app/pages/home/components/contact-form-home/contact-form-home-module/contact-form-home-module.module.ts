import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormHomeComponent } from '../contact-form-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ContactFormHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports :[
    ContactFormHomeComponent
  ]
})
export class ContactFormHomeModuleModule { }

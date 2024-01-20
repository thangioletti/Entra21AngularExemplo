import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    UserComponent
  ],
})
export class UserModule { }

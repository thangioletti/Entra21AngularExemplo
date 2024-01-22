import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NzTableModule,
    NzButtonModule,
    RouterModule
  ],
  exports: [
    UserComponent
  ],
})
export class UserModule { }

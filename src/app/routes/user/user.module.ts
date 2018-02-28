import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { NzTableModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    NzTableModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzLayoutModule, NzMenuModule } from 'ng-zorro-antd';
import { LayoutComponent } from './layout.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class LayoutModule { }

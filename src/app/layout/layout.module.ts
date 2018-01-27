import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule, NzMenuModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzLayoutModule, NzMenuModule } from 'ng-zorro-antd';
import { LayoutComponent } from './layout.component';
import { ReuseTabModule } from '../reuse-tab/reuse-tab.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    ReuseTabModule.forRoot()
  ],
  declarations: [
    LayoutComponent
  ]
})
export class LayoutModule { }

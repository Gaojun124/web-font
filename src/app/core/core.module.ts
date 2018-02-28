import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ReuseTabModule } from './layout/reuse-tab/reuse-tab.module';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [],
  providers: [
    UserService
  ]
})
export class CoreModule { }

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { NzTabsModule, NzButtonModule, NzPopconfirmModule } from 'ng-zorro-antd';

import { ReuseTabComponent } from './reuse-tab.component';
import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabStrategy } from './reuse-tab.strategy';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NzTabsModule,
    NzButtonModule,
    NzPopconfirmModule
  ],
  declarations: [
    ReuseTabComponent
  ],
  exports: [
    ReuseTabComponent
  ]
})
export class ReuseTabModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ReuseTabModule,
      providers: [
        ReuseTabService,
        // { provide: RouteReuseStrategy, useClass: ReuseTabStrategy, deps: [ReuseTabService] }
      ]
    };
  }
}

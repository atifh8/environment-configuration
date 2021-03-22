import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { DemoNgZorroAntdModule } from '../../antmodules/ant-modules';

@NgModule({
  imports: [WelcomeRoutingModule, CommonModule, DemoNgZorroAntdModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }

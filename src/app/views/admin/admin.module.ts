import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SafeModule } from 'src/app/safe/safe.module';
import { CoolLayoutModule } from 'src/app/cool-layout/cool-layout.module';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';


@NgModule({
  declarations: [AdminLandingPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SafeModule,
    CoolLayoutModule,
  ]
})
export class AdminModule { }

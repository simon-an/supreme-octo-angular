import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SafeModule } from 'src/app/safe/safe.module';
import { CoolLayoutModule } from 'src/app/cool-layout/cool-layout.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [UserLandingPageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SafeModule,
    CoolLayoutModule,
    MatListModule,
  ]
})
export class UserModule { }

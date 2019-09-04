import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SafeModule } from 'src/app/safe/safe.module';
import { CoolLayoutModule } from 'src/app/cool-layout/cool-layout.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { MatListModule } from '@angular/material/list';
import { SafePageComponent } from './containers/safe-page/safe-page.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [UserLandingPageComponent, SafePageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SafeModule,
    CoolLayoutModule,
    MatListModule,
    MatIconModule,

  ],
  exports: [SafePageComponent]
})
export class UserModule { }

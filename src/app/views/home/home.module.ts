import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CoolLayoutModule } from 'src/app/cool-layout/cool-layout.module';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [HomeLandingPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoolLayoutModule,
    MatListModule,

  ]
})
export class HomeModule { }

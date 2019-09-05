import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '.';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SafeEffects } from './effects/safe.effects';
import { SafeItemEffects } from './effects/safe-item.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([SafeEffects, SafeItemEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class StateModule { }

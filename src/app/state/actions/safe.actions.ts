import { Action } from '@ngrx/store';

export enum SafeActionTypes {
  LoadSafes = '[Safe] Load Safes',
  
  
}

export class LoadSafes implements Action {
  readonly type = SafeActionTypes.LoadSafes;
}


export type SafeActions = LoadSafes;

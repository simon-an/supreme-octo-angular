import { Action } from '@ngrx/store';

export enum SafeItemActionTypes {
  LoadSafeItems = '[SafeItem] Load SafeItems',
  
  
}

export class LoadSafeItems implements Action {
  readonly type = SafeItemActionTypes.LoadSafeItems;
}


export type SafeItemActions = LoadSafeItems;

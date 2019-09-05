import { Action } from '@ngrx/store';
import { Safe } from '~core/model';

export enum SafeActionTypes {
  UserLoadSafesOnItemChange = '[User-Add-Item-Dialog] Load Safe',
  LoadSafesSuccess = '[Safe API] Load Safe Success',
  LoadSafesFailure = '[Safe API] Load Safe Failure',
  UserLoadSafes = '[User-Module] Load Safe',
  AdminLoadSafes = '[Admin-Module] Load Safe',
}

export class UserLoadSafesOnItemChange implements Action {
  readonly type = SafeActionTypes.UserLoadSafesOnItemChange;
}
export class LoadSafesSuccess implements Action {
  readonly type = SafeActionTypes.LoadSafesSuccess;
  constructor(public payload: { safes: Safe[] }) { }
}
export class LoadSafesFailure implements Action {
  readonly type = SafeActionTypes.LoadSafesFailure;
}
export class UserLoadSafes implements Action {
  readonly type = SafeActionTypes.UserLoadSafes;
}
export class AdminLoadSafes implements Action {
  readonly type = SafeActionTypes.AdminLoadSafes;
}


export type SafeActions =
  UserLoadSafesOnItemChange |
  LoadSafesSuccess |
  LoadSafesFailure |
  UserLoadSafes |
  AdminLoadSafes;

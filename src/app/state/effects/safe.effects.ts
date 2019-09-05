import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, catchError, map, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { SafeActionTypes, SafeActions, LoadSafesFailure, LoadSafesSuccess } from '../actions/safe.actions';
import { SafeService } from '~core/services';
import { Safe } from '~core/model';

@Injectable()
export class SafeEffects {

  @Effect({ dispatch: true })
  loadSafes$ = this.actions$.pipe(
    // tap(console.log),
    ofType(
      SafeActionTypes.UserLoadSafes,
      SafeActionTypes.AdminLoadSafes,
      SafeActionTypes.UserLoadSafesOnItemChange),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => this.safeService.getSafes()),
    map((safes: Safe[]) => new LoadSafesSuccess({ safes })),
    catchError(() => of(new LoadSafesFailure()),
    )
  );

  constructor(private actions$: Actions<SafeActions>, private safeService: SafeService) { }

}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { SafeItemActionTypes, SafeItemActions } from '../actions/safe-item.actions';



@Injectable()
export class SafeItemEffects {


  @Effect()
  loadSafeItems$ = this.actions$.pipe(
    ofType(SafeItemActionTypes.LoadSafeItems),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<SafeItemActions>) {}

}

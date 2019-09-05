import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromSafeItem from './reducers/safe-item.reducer';
import * as fromSafe from './reducers/safe.reducer';

export interface State {

  [fromSafeItem.safeItemFeatureKey]: fromSafeItem.State;
  [fromSafe.safeFeatureKey]: fromSafe.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromSafeItem.safeItemFeatureKey]: fromSafeItem.reducer,
  [fromSafe.safeFeatureKey]: fromSafe.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSafeItem from './reducers/safe-item.reducer';


export interface State {

  [fromSafeItem.safeItemFeatureKey]: fromSafeItem.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromSafeItem.safeItemFeatureKey]: fromSafeItem.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

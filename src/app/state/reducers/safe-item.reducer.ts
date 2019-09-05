
import { SafeItemActions, SafeItemActionTypes } from '../actions/safe-item.actions';

export const safeItemFeatureKey = 'safeItem';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: SafeItemActions): State {
  switch (action.type) {

    case SafeItemActionTypes.LoadSafeItems:
      return state;

    default:
      return state;
  }
}

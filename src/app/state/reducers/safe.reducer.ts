
import { SafeActions, SafeActionTypes } from '../actions/safe.actions';

export const safeFeatureKey = 'safe';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: SafeActions): State {
  switch (action.type) {

    case SafeActionTypes.LoadSafes:
      return state;

    default:
      return state;
  }
}

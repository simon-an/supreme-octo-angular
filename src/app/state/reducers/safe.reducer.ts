
import { SafeActions, SafeActionTypes } from '../actions/safe.actions';
import { Safe } from '~core/model';

export const safeFeatureKey = 'safe';

export interface State {
  safes: Safe[];
  pending: boolean;
}

export const initialState: State = {
  safes: [],
  pending: false,
};

export function reducer(state = initialState, action: SafeActions): State {
  switch (action.type) {

    case SafeActionTypes.UserLoadSafes:
    case SafeActionTypes.AdminLoadSafes:
    case SafeActionTypes.UserLoadSafesOnItemChange: {
      return { ...state, pending: true };
    }

    case SafeActionTypes.LoadSafesFailure: {
      return { ...state, pending: false };
    }
    case SafeActionTypes.LoadSafesSuccess: {
      return { ...state, safes: [...action.payload.safes], pending: false };
    }

    default:
      return state;
  }
}

import {
    createFeatureSelector,
    createSelector,
} from '@ngrx/store';
import * as fromSafe from '../reducers/safe.reducer';

export const selectSafeFeature = createFeatureSelector('safe');
export const selectSafes = createSelector(
    selectSafeFeature,
    (state: fromSafe.State) => state.safes
);

export const selectSafesLoading = createSelector(
    selectSafeFeature,
    (state: fromSafe.State) => state.pending
);

export const selectSafeByUserId = createSelector(
    selectSafeFeature,
    (state: fromSafe.State, { userId }: { userId: string }) =>
        state.safes.find(safe => safe.users.includes(userId))
);

export const selectSafeBySafeId = createSelector(
    selectSafeFeature,
    (state: fromSafe.State, { safeId }: { safeId: string }) =>
        state.safes.find(safe => safe.id === safeId)
);
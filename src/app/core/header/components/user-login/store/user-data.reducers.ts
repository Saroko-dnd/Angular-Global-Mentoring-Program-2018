import { UserDataStoreActionsUnion, UserDataStoreActions } from 'src/app/core/header/components/user-login/store/user-data.actions';
import { initialUserDataState, IUserDataState } from 'src/app/core/header/components/user-login/store/user-data.state';



export function userDataStateReducer(
  state = initialUserDataState,
  action: UserDataStoreActionsUnion
): IUserDataState {
  const newState = {
    ...state
  };

  switch (action.type) {
    case UserDataStoreActions.UpdateUserData: {
      newState.user = action.payload.user;

      return newState;
    }

    case UserDataStoreActions.ResetUserData: {
      return initialUserDataState;
    }

    case UserDataStoreActions.UpdateComponentVisibility: {
      newState.shouldBeVisibleForUser = action.payload.shoulBeVisible;

      return newState;
    }

    default: {
      return state;
    }
  }
}

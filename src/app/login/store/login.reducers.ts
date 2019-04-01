import { initialLoginState, ILoginState } from 'src/app/login/store/login.state';
import { LoginActionsUnion, LoginActions } from 'src/app/login/store/login.actions';


export function loginStateReducer(
  state = initialLoginState,
  action: LoginActionsUnion
): ILoginState {
  switch (action.type) {
    case LoginActions.LoginFailed: {
      return {
        loginFailed: true,
      };
    }

    case LoginActions.LoginWasSuccessful:
    case LoginActions.ResetLoginState: {
      return state;
    }

    default: {
      return state;
    }
  }
}

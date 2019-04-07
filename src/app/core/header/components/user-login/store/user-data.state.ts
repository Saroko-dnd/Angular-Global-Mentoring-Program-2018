import { IUser } from 'src/app/shared';

export interface IUserDataState {
  user: IUser;
  shouldBeVisibleForUser: boolean;
}

export const initialUserDataState: IUserDataState = {
  user: {
    id: 0,
    fakeToken: '',
    name: {
      first: '',
      last: ''
    },
    login: 'Anonymous user',
    password: ''
  },
  shouldBeVisibleForUser: false
};

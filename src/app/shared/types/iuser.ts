export interface IUser {
  id: number;
  fakeToken: string;
  name: {
    first: string;
    last: string;
  };
  login: string;
  password: string;
}

import { IUser } from 'src/app/shared/models/iuser';

export class User implements IUser {
  constructor (public id: string, public firstName: string, public lastName: string) {}
}

import { IAuthor } from '../types/iauthor';

export class Author implements IAuthor {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string
  ) {}
}

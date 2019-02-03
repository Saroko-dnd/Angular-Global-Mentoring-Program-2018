import { IAuthor } from './iauthor';

export interface ICourse {
  authors: IAuthor[];
  creationDate: Date;
  description: string;
  duration: number;
  id: string;
  title: string;
  topRated: boolean;
}

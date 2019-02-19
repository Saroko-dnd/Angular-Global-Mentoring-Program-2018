import { IAuthor } from './iauthor';

export interface ICourse {
  authors: IAuthor[];
  date: string;
  description: string;
  id: string;
  isTopRated: boolean;
  length: number;
  name: string;
}

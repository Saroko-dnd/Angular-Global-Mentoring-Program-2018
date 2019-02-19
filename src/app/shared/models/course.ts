import { ICourse } from '../types/icourse';
import { IAuthor } from '../types/iauthor';

export class Course implements ICourse {
  constructor(
    public authors: IAuthor[],
    public date: string,
    public description: string,
    public length: number,
    public id: string,
    public name: string,
    public isTopRated: boolean
  ) {}
}

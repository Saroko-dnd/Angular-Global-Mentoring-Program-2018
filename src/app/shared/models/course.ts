import { ICourse } from '../types/icourse';
import { IAuthor } from '../types/iauthor';

export class Course implements ICourse {
  constructor(
    public authors: IAuthor[],
    public creationDate: Date,
    public description: string,
    public duration: number,
    public id: string,
    public title: string,
    public topRated: boolean
  ) {}
}

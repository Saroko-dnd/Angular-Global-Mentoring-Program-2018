import { ICourse } from '../types/icourse';

export class Course implements ICourse {
  constructor(
    public creationDate: Date,
    public description: string,
    public duration: number,
    public id: string,
    public title: string,
    public topRated: boolean
  ) {}
}

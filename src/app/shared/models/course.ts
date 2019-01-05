import { ICourse } from '../types/icourse';

export class Course implements ICourse {
  constructor(
    public date: Date,
    public description: string,
    public duration: string,
    public id: string,
    public title: string,
    public topRated: boolean
  ) {}
}

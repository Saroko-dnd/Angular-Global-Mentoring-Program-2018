import { ICourse } from '../../../shared/models/icourse';

export class Course implements ICourse {
  constructor (
    public date: Date,
    public description: string,
    public duration: number,
    public id: string,
    public title: string) {}
}

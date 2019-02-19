import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICourse } from '../../../shared';

import { Guid } from 'guid-typescript';
import { IAuthor } from 'src/app/shared/types/iauthor';

interface ICoursesMetadata {
  numberOfCourses: number;
}

@Injectable()
export class CoursesService {
  static courses: Map<string, ICourse> = new Map();

  createCourse(newCourse: ICourse): void {
    newCourse.id = Guid.raw();
    CoursesService.courses.set(newCourse.id, newCourse);
  }

  getNumberOfCourses(): Observable<number> {
    return this.http.get<ICoursesMetadata>(`${this.COURSES_NUMBER_API_PATH}`, {}).pipe(
      map(coursesMetadata => {
        return coursesMetadata.numberOfCourses;
      })
    );
  }

  getItemById(id: string): ICourse {
    return CoursesService.courses.get(id);
  }

  getList(page: number, count: number): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.COURSES_LIST_API_PATH}`, {params: {start: (page * count) + '', count: count + ''}});
  }

  removeItem(id: string): void {
    CoursesService.courses.delete(id);
  }

  updateItem(course: ICourse): void {
    CoursesService.courses.set(course.id, course);
  }

  constructor(
    @Inject('COURSES_NUMBER_API_PATH') private COURSES_NUMBER_API_PATH: String,
    @Inject('COURSES_LIST_API_PATH') private COURSES_LIST_API_PATH: String,
    private http: HttpClient
  ) {}
}

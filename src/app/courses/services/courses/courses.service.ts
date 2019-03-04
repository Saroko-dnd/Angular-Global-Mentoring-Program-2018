import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICourse, ICoursesData } from 'src/app/shared';

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

  getItemById(id: string): ICourse {
    return CoursesService.courses.get(id);
  }

  getList(
    page: number,
    count: number,
    textFragment = ''
  ): Observable<ICoursesData> {
    return this.http.get<ICoursesData>(`${this.COURSES_LIST_API_PATH}`, {
      params: { start: page * count + '', count: count + '', textFragment }
    });
  }

  removeItem(id: string): Observable<Object> {
    return this.http.delete(`${this.COURSES_LIST_API_PATH}`, {params: {id}, responseType: 'text'});
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

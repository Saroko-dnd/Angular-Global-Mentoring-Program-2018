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
  createCourse(newCourse: ICourse): Observable<any> {
    newCourse.id = Guid.raw();

    return this.http.post(`${this.COURSES_CREATE_API_PATH}`, newCourse, {
      responseType: 'text'
    });
  }

  getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(`${this.AUTHORS_API_PATH}`);
  }

  getItemById(id: string): Observable<ICourse> {
    return this.http.get<ICourse>(`${this.COURSES_LIST_API_PATH}/${id}`);
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

  removeItem(id: string): Observable<any> {
    return this.http.delete(`${this.COURSES_LIST_API_PATH}`, {
      params: { id },
      responseType: 'text'
    });
  }

  updateItem(course: ICourse): Observable<any> {
    return this.http.post(`${this.COURSES_UPDATE_API_PATH}`, course, {
      responseType: 'text'
    });
  }

  constructor(
    @Inject('COURSES_LIST_API_PATH') private COURSES_LIST_API_PATH: String,
    @Inject('COURSES_CREATE_API_PATH') private COURSES_CREATE_API_PATH: String,
    @Inject('COURSES_UPDATE_API_PATH') private COURSES_UPDATE_API_PATH: String,
    @Inject('AUTHORS_API_PATH') private AUTHORS_API_PATH: String,
    private http: HttpClient
  ) {}
}

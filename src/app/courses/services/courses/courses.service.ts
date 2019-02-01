import { Injectable } from '@angular/core';

import { ICourse } from '../../../shared';

import { Guid } from 'guid-typescript';

@Injectable()
export class CoursesService {
  static courses: Map<string, ICourse> = new Map([
    [
      '1',
      {
        creationDate: new Date(Date.now() - 172800000),
        description: `Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
      est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
      amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
      laborum atque aut id necessitatibus asperiores minus debitis fugit amet
      dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: 120,
        id: '1',
        title: 'JavaScript: Understanding the Weird Parts',
        topRated: false
      }
    ],
    [
      '2',
      {
        creationDate: new Date(Date.now() - 86400000),
        description: `Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
      est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
      amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
      laborum atque aut id necessitatibus asperiores minus debitis fugit amet
      dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: 330,
        id: '2',
        title: 'React Crash Course 2018',
        topRated: true
      }
    ],
    [
      '3',
      {
        creationDate: new Date(Date.now()),
        description: `Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
      est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
      amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
      laborum atque aut id necessitatibus asperiores minus debitis fugit amet
      dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: 40,
        id: '3',
        title: 'Advanced Javascript',
        topRated: true
      }
    ],
    [
      '4',
      {
        creationDate: new Date(Date.now() + 86400000),
        description: `Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
      est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
      amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
      laborum atque aut id necessitatibus asperiores minus debitis fugit amet
      dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: 50,
        id: '4',
        title: 'Nuxt.js Fundamentals',
        topRated: false
      }
    ],
    [
      '5',
      {
        creationDate: new Date(Date.now() + 172800000),
        description: `Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
      est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
      amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
      laborum atque aut id necessitatibus asperiores minus debitis fugit amet
      dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: 90,
        id: '5',
        title: 'React Training: Advanced React.js',
        topRated: false
      }
    ]
  ]);

  createCourse(newCourse: ICourse): void {
    newCourse.id = Guid.raw();
    CoursesService.courses.set(newCourse.id, newCourse);
  }

  getItemById(id: string): ICourse {
    return CoursesService.courses.get(id);
  }

  getList(): ICourse[] {
    return [...CoursesService.courses.values()];
  }

  removeItem(id: string): void {
    CoursesService.courses.delete(id);
  }

  updateItem(course: ICourse): void {
    CoursesService.courses.set(course.id, course);
  }

  constructor() {}
}

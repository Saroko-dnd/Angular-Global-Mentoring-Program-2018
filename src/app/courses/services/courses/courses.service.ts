import { Injectable } from '@angular/core';

import { ICourse } from '../../../shared';

import { Guid } from 'guid-typescript';
import { IAuthor } from 'src/app/shared/types/iauthor';

@Injectable()
export class CoursesService {
  static courses: Map<string, ICourse> = new Map([
    [
      '1',
      {
        authors: [
          {
            id: '1370',
            firstName: 'Polly',
            lastName: 'Sosa'
          }
        ],
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
        authors: [
          {
            id: '8413',
            firstName: 'Greta',
            lastName: 'Richardson'
          },
          {
            id: '7458',
            firstName: 'Deana',
            lastName: 'Bruce'
          },
          {
            id: '5508',
            firstName: 'Patsy',
            lastName: 'Bright'
          }
        ],
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
        authors: [
          {
            id: '3618',
            firstName: 'Laura',
            lastName: 'Kirby'
          },
          {
            id: '9064',
            firstName: 'Quinn',
            lastName: 'Cain'
          }
        ],
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
        authors: [
          {
            id: '21',
            firstName: 'Maddox',
            lastName: 'Diaz'
          },
          {
            id: '800',
            firstName: 'Glenda',
            lastName: 'Juarez'
          },
          {
            id: '1772',
            firstName: 'Hilda',
            lastName: 'Gaines'
          },
          {
            id: '3003',
            firstName: 'Abbott',
            lastName: 'Mckay'
          }
        ],
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
        authors: [
          {
            id: '9926',
            firstName: 'Burt',
            lastName: 'Holland'
          },
          {
            id: '6440',
            firstName: 'Andrews',
            lastName: 'Byers'
          },
          {
            id: '8509',
            firstName: 'Shawn',
            lastName: 'Craig'
          }
        ],
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

import { Injectable } from '@angular/core';

import { ICourse } from 'src/app/shared';

import Guid from 'guid';

@Injectable()
export class CoursesService {
  static courses: ICourse[] = [
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
    },
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
    },
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
    },
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
    },
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
  ];

  createCourse(newCourse: ICourse): void {
    newCourse.id = Guid.raw();
    CoursesService.courses.push(newCourse);
  }

  getList(): ICourse[] {
    return CoursesService.courses;
  }

  constructor() {}
}

import { Injectable } from '@angular/core';

import { ICourse } from 'src/app/shared';

@Injectable()
export class CoursesService {
  getList(): ICourse[] {
    const listOfCourses: ICourse[] = [
      {
        creationDate: new Date(),
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
        creationDate: new Date(),
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
        creationDate: new Date(),
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
        creationDate: new Date(),
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
        creationDate: new Date(),
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

    listOfCourses.forEach(
      (course: ICourse, index: number): void => {
        course.creationDate.setDate(course.creationDate.getDate() + index - 2);
      }
    );

    return listOfCourses;
  }

  constructor() {}
}

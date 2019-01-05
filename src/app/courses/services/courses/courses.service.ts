import { Injectable } from '@angular/core';

import { ICourse } from 'src/app/shared';

@Injectable()
export class CoursesService {
  getListOfCourses(): ICourse[] {
    return [
      {
        date: new Date('2020-8-19'),
        description: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
        est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
        amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
        laborum atque aut id necessitatibus asperiores minus debitis fugit amet
        dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: '2h',
        id: '1',
        title: 'Course 1 title',
        topRated: false
      },
      {
        date: new Date('2020-2-13'),
        description: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
        est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
        amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
        laborum atque aut id necessitatibus asperiores minus debitis fugit amet
        dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: '5h 30min',
        id: '2',
        title: 'Course 2 title',
        topRated: true
      },
      {
        date: new Date('2019-1-3'),
        description: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
        est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
        amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
        laborum atque aut id necessitatibus asperiores minus debitis fugit amet
        dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: '40min',
        id: '3',
        title: 'Course 3 title',
        topRated: true
      },
      {
        date: new Date('2019-1-2'),
        description: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
        est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
        amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
        laborum atque aut id necessitatibus asperiores minus debitis fugit amet
        dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: '50min',
        id: '4',
        title: 'Course 4 title',
        topRated: false
      },
      {
        date: new Date('2017-6-12'),
        description: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
        est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
        amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
        laborum atque aut id necessitatibus asperiores minus debitis fugit amet
        dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: '1h 30min',
        id: '5',
        title: 'Course 5 title',
        topRated: false
      }
    ];
  }

  constructor() {}
}

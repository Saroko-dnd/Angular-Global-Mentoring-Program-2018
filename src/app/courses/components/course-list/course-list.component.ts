import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared';

@Component({
  selector: 'learn-portal-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  constructor() {}

  courses: ICourse[];

  onItemDeleted(deletedCourseId: string) {
    console.log(`Course with id ${deletedCourseId} was deleted`);
  }

  ngOnInit() {
    this.courses = [
      {
        date: new Date('2015-8-19'),
        description: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
        est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
        amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
        laborum atque aut id necessitatibus asperiores minus debitis fugit amet
        dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: '2h',
        id: '1',
        title: 'Course 1 title'
      },
      {
        date: new Date('2008-2-13'),
        description: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
        est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
        amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
        laborum atque aut id necessitatibus asperiores minus debitis fugit amet
        dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: '5h 30min',
        id: '2',
        title: 'Course 2 title'
      },
      {
        date: new Date('2010-1-25'),
        description: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
        est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
        amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
        laborum atque aut id necessitatibus asperiores minus debitis fugit amet
        dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: '40min',
        id: '3',
        title: 'Course 3 title'
      },
      {
        date: new Date('2018-5-3'),
        description: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
        est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
        amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
        laborum atque aut id necessitatibus asperiores minus debitis fugit amet
        dolorum assumenda nam obcaecati vitae in sequi!`,
        duration: '50min',
        id: '4',
        title: 'Course 4 title'
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
        title: 'Course 5 title'
      }
    ];
  }
}

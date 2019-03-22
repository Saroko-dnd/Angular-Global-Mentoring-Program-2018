import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  describe('getListOfCourses()', () => {
    beforeEach(() =>
      TestBed.configureTestingModule({
        providers: [CoursesService]
      })
    );

    it('should return not empty array of courses', () => {
      const service: CoursesService = TestBed.get(CoursesService);
      let courses;
      service.getList(0, 5).subscribe(foundCourses => {
        courses = foundCourses;

        expect(Array.isArray(courses)).toBe(true);
        expect(courses.length > 0).toBe(true);

        courses.forEach(course => {
          expect(typeof course).toBe('object');

          expect(course.creationDate instanceof Date).toBe(true);
          expect(typeof course.description).toBe('string');
          expect(typeof course.duration).toBe('number');
          expect(typeof course.id).toBe('string');
          expect(typeof course.title).toBe('string');
        });
      });
    });
  });
});

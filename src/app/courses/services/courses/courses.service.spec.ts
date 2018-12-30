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
      const courses = service.getListOfCourses();

      expect(courses.length > 0).toBe(true);
    });
  });
});

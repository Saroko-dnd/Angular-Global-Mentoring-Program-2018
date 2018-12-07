import { CreateNewCourseModule } from './create-new-course.module';

describe('CreateNewCourseModule', () => {
  let createNewCourseModule: CreateNewCourseModule;

  beforeEach(() => {
    createNewCourseModule = new CreateNewCourseModule();
  });

  it('should create an instance', () => {
    expect(createNewCourseModule).toBeTruthy();
  });
});

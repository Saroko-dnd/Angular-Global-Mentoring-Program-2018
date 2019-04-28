import { ICourse } from 'src/app/shared';

export interface ICourseListState {
  courses: ICourse[];
  numberOfCourses: number;
  pageCapacity: number;
  page: number;
  searchQuery: string;
}

export const initialCourseListState: ICourseListState = {
  courses: [],
  numberOfCourses: 0,
  pageCapacity: 10,
  page: 1,
  searchQuery: ''
};

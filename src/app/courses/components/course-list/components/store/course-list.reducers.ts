import { ICourseListState, initialCourseListState } from './course-list.state';
import {
  CourseListActions,
  CourseListActionsUnion
} from './course-list.actions';

export function courseListStateReducer(
  state = initialCourseListState,
  action: CourseListActionsUnion
): ICourseListState {
  const newState = { ...state };

  switch (action.type) {
    case CourseListActions.DecrementPageNumber: {
      newState.page -= 1;

      return newState;
    }

    case CourseListActions.PageChanged: {
      newState.page = action.payload.newPageNumber;

      return newState;
    }

    case CourseListActions.UpdateCourseListData: {
      newState.courses = action.payload.coursesData.courses;
      newState.numberOfCourses = action.payload.coursesData.length;

      return newState;
    }

    case CourseListActions.UpdateSearchQuery: {
      newState.searchQuery = action.payload.newSearchQuery;

      return newState;
    }

    default: {
      return state;
    }
  }
}

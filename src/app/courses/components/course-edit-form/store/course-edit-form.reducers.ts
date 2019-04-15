import cloneDeep from 'lodash/cloneDeep';

import {
  initialCourseEditFormState,
  ICourseEditFormState
} from './course-edit-form.state';
import {
  CourseEditFormActionsUnion,
  CourseEditFormActions
} from './course-edit-form.actions';

export function courseEditFormStateReducer(
  state = initialCourseEditFormState,
  action: CourseEditFormActionsUnion
): ICourseEditFormState {
  const newState = cloneDeep(state);

  switch (action.type) {
    case CourseEditFormActions.AddedNewAuthor: {
      newState.authorsMultiSelect.selectedAuthors.push(action.payload.author);

      return newState;
    }

    case CourseEditFormActions.AllAuthorsRemoved: {
      newState.authorsMultiSelect.selectedAuthors = [];

      return newState;
    }

    case CourseEditFormActions.CancelCourseEditing:
    case CourseEditFormActions.CourseSaved:
    case CourseEditFormActions.ResetCourseEditFormState: {
      console.log('reset');
      console.log(initialCourseEditFormState);
      return initialCourseEditFormState;
    }

    case CourseEditFormActions.CourseDescriptionChanged: {
      newState.course.description = action.payload.description;

      return newState;
    }

    case CourseEditFormActions.CourseDurationChanged: {
      newState.course.length = action.payload.duration;

      return newState;
    }

    case CourseEditFormActions.CourseLoaded: {
      newState.course = action.payload.course;

      newState.authorsMultiSelect.selectedAuthors = action.payload.course.authors.map(
        author => {
          return {
            id: author.id,
            firstName: author.firstName,
            lastName: author.lastName,
            name: `${author.firstName} ${author.lastName}`
          };
        }
      );

      return newState;
    }

    case CourseEditFormActions.CourseNameChanged: {
      newState.course.name = action.payload.name;

      return newState;
    }

    case CourseEditFormActions.ListOfAuthorsLoaded: {
      newState.authorsMultiSelect.dropdownList = action.payload.authors.map(
        author => {
          return {
            id: author.id,
            firstName: author.firstName,
            lastName: author.lastName,
            name: `${author.firstName} ${author.lastName}`
          };
        }
      );

      return newState;
    }

    case CourseEditFormActions.RemovedAuthor: {
      console.log(typeof action.payload.author.id);
      console.log(typeof newState.authorsMultiSelect.selectedAuthors[0].id);
      newState.authorsMultiSelect.selectedAuthors.splice(
        newState.authorsMultiSelect.selectedAuthors.findIndex(author => {
          return author.id === action.payload.author.id;
        }),
        1
      );

      return newState;
    }

    case CourseEditFormActions.UpdateCourseDate: {
      newState.course.date = action.payload.date;

      return newState;
    }

    case CourseEditFormActions.ValidationOfAuthorsFailed: {
      newState.selectedAuthorsAreValid = false;

      return newState;
    }

    case CourseEditFormActions.ValidationOfAuthorsPassed: {
      newState.selectedAuthorsAreValid = true;

      return newState;
    }

    default: {
      return state;
    }
  }
}

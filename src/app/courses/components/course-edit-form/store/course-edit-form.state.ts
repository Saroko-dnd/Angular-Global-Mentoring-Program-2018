import { ICourse } from 'src/app/shared';
import { IMultiSelectorModel } from '../types/multi-selector-model';

export interface ICourseEditFormState {
  course: ICourse;
  authorsMultiSelect: IMultiSelectorModel;
  selectedAuthorsAreValid: boolean;
}

export const initialCourseEditFormState: ICourseEditFormState = {
  course: {
    authors: [],
    date: null,
    description: null,
    length: null,
    id: null,
    name: null,
    isTopRated: false
  },
  authorsMultiSelect: {
    dropdownList: [],
    selectedAuthors: []
  },
  selectedAuthorsAreValid: true
};

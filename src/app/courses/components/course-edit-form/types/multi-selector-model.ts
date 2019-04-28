import { IAuthorForMultiSelector } from './author-for-multi-selector';

export interface IMultiSelectorModel {
  dropdownList: IAuthorForMultiSelector[];
  selectedAuthors: IAuthorForMultiSelector[];
}

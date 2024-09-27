import { createReducer, on } from '@ngrx/store';
import { Book } from '../models/book';
import {
  AddBook,
  AddBookFailure,
  AddBookSuccess,
  RemoveBook,
} from './book.actions';

const initState: Book[] = [];

export const BookReducer = createReducer(
  initState,
  on(AddBook, (state, _: Book) => state),
  on(AddBookSuccess, (state, { id, title, author }: Book) => [
    ...state,
    { id, title, author },
  ]),
  on(AddBookFailure, (state, { error }) => {
    console.error(error);
    return state;
  }),
  on(RemoveBook, (state, { bookId }) =>
    state.filter((book) => book.id !== bookId),
  ),
);

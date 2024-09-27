import { createReducer, on } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from './book.actions';

const initState: Book[] = [];

export const BookReducer = createReducer(
  initState,
  on(AddBook, (state, payload: Book) => [...state, payload]),
  on(RemoveBook, (state, { bookId }) =>
    state.filter((book) => book.id !== bookId)
  )
);

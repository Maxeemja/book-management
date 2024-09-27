import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookService } from './book.service';
import { AddBook, AddBookFailure, AddBookSuccess } from './book.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookEffects {
  actions$ = inject(Actions);
  bookService = inject(BookService);

  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddBook),
      mergeMap((action) =>
        this.bookService.addBook(action).pipe(
          map((book) => AddBookSuccess(book)),
          catchError((error) => of(AddBookFailure(error))),
        ),
      ),
    ),
  );
}

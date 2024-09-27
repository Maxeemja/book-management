import { Component, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  store = inject(Store<AppState>);

  books$!: Observable<Book>;

  ngOnInit() {
    this.books$ = this.store.pipe(select('book'));
  }

  addBook(book: Book) {
    this.store.dispatch(AddBook(book));
  }

  removeBook(bookId: string) {
    this.store.dispatch(RemoveBook({ bookId }));
  }
}

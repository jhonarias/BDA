import { Injectable } from '@angular/core';
import { Book } from "./book";
@Injectable()
export class BookService {

  bookList:Array<Book>;

  constructor() {
    this.bookList = [];
   }

}

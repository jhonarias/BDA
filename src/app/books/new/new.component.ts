import { Component, OnInit } from '@angular/core';
import { Book } from "../book";
import { BookService } from "../book-service.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  book:Book;
  
  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.book = new Book();
  }

  onSaveClick() {
    alert('Se guardo el cliente '+ this.book.title + ' satisfactoriamente');
    this.bookService.bookList.push(this.book);    
  }

  onNewClick() {
    this.book = new Book();
  }

}

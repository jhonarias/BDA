import { Component, OnInit } from '@angular/core';
import { BookService } from "../book-service.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  books: string[];
  constructor(private bookService:BookService) { }

  getTypeBook = ['Externo', 'Libre'];

  ngOnInit() {  
    this.getBooks();
  }

  getBooks() {
    this.bookService.loadBooks().then((book) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      let respuesta = JSON.parse(book['_body']);            
      this.bookService.bookList = respuesta;      
   }).catch((err) => {
      console.log(err);
    });                              
  }

}

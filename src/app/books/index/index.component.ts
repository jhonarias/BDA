import { Component, OnInit } from '@angular/core';
import { BookService } from "../book-service.service";
import { Book } from "../book";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  books: string[];
  bookDetail:Array<Book>;
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
  detailBook(book_id) {       
    this.bookService.showBook(book_id).then((book) => {  
      if(book['status'] == 404 ) {
        alert(book['_body']);
        location.href = '/books/index';
      } else {
        let respuesta = JSON.parse(book['_body']);            
        this.bookDetail = respuesta;
        this.themesByBook(book_id); 
      }     
    }).catch((err) => {
      console.log(err);
    });
  }

  themes_By_Book: string;
  themesByBook(book_id) {
    this.bookService.themesByBook(book_id).then((book) => {  
      if(book['status'] == 404 ) {
        alert(book['_body']);
        location.href = '/books/index';
      } else {
        let respuesta = JSON.parse(book['_body']);            
        this.themes_By_Book = respuesta;        
      }     
    }).catch((err) => {
      console.log(err);
    });
  }
}

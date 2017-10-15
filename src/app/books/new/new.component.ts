import { Component, OnInit } from '@angular/core';
import { Book } from "../book";
import { BookService } from "../book-service.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  visibilitys = [
    {value: '0', viewValue: 'No visible'},
    {value: '1', viewValue: 'Visible'},  
  ];

  types = [
    {value: '1', viewValue: 'Interno'},
    {value: '0', viewValue: 'Externo'},  
  ];


  book:Book;
  
  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.book = new Book();
  }

  fileChange(files: any){
    console.log(files);
    this.book.cover_page = files[0];
  }
  onSaveClick() {
    console.log('El libro ', this.book);   
    this.bookService.saveBook(this.book).then((book)=>{
      console.log('respuesta', book);
      if(book['status'] == 201 ) {
        let respuesta = JSON.parse(book['_body']); 
        this.bookService.bookList.push(respuesta);
        alert('Se agrego correctmente el libro!');
      } else {
        alert(book['_body']);
      }     
    }).catch((err) => {
      console.log(err);
    })
  }

  onNewClick() {
    this.book = new Book();
  }
 

}

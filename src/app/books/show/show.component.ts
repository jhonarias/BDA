import { Component, OnInit } from '@angular/core';
import { BookService } from "../book-service.service";
import { ActivatedRoute } from '@angular/router';
import { Book } from "../book";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  id: number;
  private sub: any;
  bookList:Array<Book>;
  constructor(private route: ActivatedRoute, private bookService:BookService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number      
      this.showBook(this.id);
      // In a real app: dispatch action to load the details here.
   });
    
  }

  showBook(id){
    this.bookService.showBook(id).then((book) => {  
      if(book['status'] == 404 ) {
        alert(book['_body']);
        location.href = '/books/index';
      } else {
        let respuesta = JSON.parse(book['_body']);            
        this.bookList = respuesta;
        console.log('libro', this.bookList);
      }     
    }).catch((err) => {
      console.log(err);
    });
  }

}

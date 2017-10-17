import { Injectable } from '@angular/core';
import { Book } from "./book";
//import { HttpClient } from "@angular/common/http";
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BookService {

  bookList:Array<Book>;
  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;

  constructor(public http: Http) {}

  loadBooks() {
    this.headersPost = new Headers({
      'Content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });

    let optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise ((resolve, reject) => {
      this.http.get('http://biblioteca.confa.co:8181/api/book', optionspost)
      .subscribe(res =>{
        resolve(res);
      },(err) => {
        resolve(err);                                             
      });
    });
  }

  saveBook(newBook: Book, formData: any) {   
    console.log("formdata", formData); 
    let body = 'title='+newBook.title+'&description='+newBook.description+'&author='+newBook.author+'&visibility='+newBook.visibility+'&keywords='+newBook.keywords+'&isbn='+newBook.isbn+'&type_id='+newBook.type_id+'&cover_page='+formData;
    this.headersPost = new Headers({
      //'Content-type': 'multipart/form-data',
      'Content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      //'enctype': 'multipart/form-data'
    });
    
    let optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise ((resolve, reject) => {
      this.http.post('http://bdc.app/api/book', body, optionspost)
      .subscribe(res =>{
        resolve(res);
      },(err) => {
        resolve(err);
      });
    });
  }

  showBook(id) {
    this.headersPost = new Headers({
      'Content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });

    let optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise ((resolve, reject) => {
      this.http.get('http://biblioteca.confa.co:8181/api/book/'+id, optionspost)
      .subscribe(res =>{
        resolve(res);
      },(err) => {
        resolve(err);                                             
      });
    });
  }

}

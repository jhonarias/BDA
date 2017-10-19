import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Book } from "../book";
import { BookService } from "../book-service.service";
import { ThemeService } from "../../themes/theme-service.service";

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

  constructor(private bookService:BookService, private elem: ElementRef, private themeService:ThemeService) { }
  
  ngOnInit() {
    this.book = new Book();
    this.activeSelect2();
    this.getThemesBooks();
  }

  activeSelect2() {
    $("#keywords").select2({
      placeholder: "palabras clave",
      language: "es",
      allowClear: true,
      tags: true,
      tokenSeparators: [',', ' '],

    });    
  }

  fileChange(files: any){
    console.log(files);
    this.book.cover_page = files[0];
  }
  onSaveClick() {
    let keywords = $("#keywords").val();
    this.book.keywords = keywords.toString();   
    let files = this.elem.nativeElement.querySelector('#cover_page').files;
    let formData = new FormData();
    let file = files[0];   
    formData.append('cover_page', file, file.name);
    formData.append('title', this.book.title);
    formData.append('description', this.book.description);
    formData.append('keywords', this.book.keywords);
    formData.append('author', this.book.author);
    formData.append('type_id', this.book.type_id);
    formData.append('link', this.book.link);
    formData.append('isbn', this.book.isbn);
    formData.append('visibility', this.book.visibility.toString());
    formData.append('themes', this.book.theme_id)

    this.bookService.saveBook(formData).then((book) => {
      console.log('respuesta', book);
      if(book['status'] == 201 ) {
        let respuesta = JSON.parse(book['_body']); 
        this.bookService.bookList.push(respuesta);
        this.book = new Book();
        $("#keywords").val('');$('#cover_page').val();
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

  getThemesBooks() {
    this.themeService.loadThemesIsActive().then((theme) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      let respuesta = JSON.parse(theme['_body']);           
      this.themeService.themeList = respuesta;      
    }).catch((err) => {
      console.log(err);
    }); 
  }
 

}

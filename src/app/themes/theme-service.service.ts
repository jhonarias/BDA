import { Injectable } from '@angular/core';
import { Theme } from "./theme";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Book } from "../books/book";

@Injectable()
export class ThemeService {

  themeList:Array<Theme>;
  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;
  urlService = 'http://bdc.app';

  constructor(public http: Http) { }

  loadThemesIsActive() {
    this.headersPost = new Headers({
      'Content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });

    let optionspost = new RequestOptions({
      headers: this.headersPost
    });
    //biblioteca.confa.co:8181
    return new Promise ((resolve, reject) => {
      this.http.get(this.urlService+'/api/getThemes', optionspost)
      .subscribe(res =>{
        resolve(res);
      },(err) => {
        resolve(err);                                             
      });
    });
  }

  loadThemes() {
    this.headersPost = new Headers({
      'Content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });

    let optionspost = new RequestOptions({
      headers: this.headersPost
    });
    //biblioteca.confa.co:8181
    return new Promise ((resolve, reject) => {
      this.http.get(this.urlService+'/api/theme', optionspost)
      .subscribe(res =>{
        resolve(res);
      },(err) => {
        resolve(err);                                             
      });
    });
  }

  saveTheme(theme: Theme) {    
    let body = 'name='+theme.name+'&description='+theme.description+'&state='+theme.status;
    this.headersPost = new Headers({
      'Content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });

    let optionspost = new RequestOptions({
      headers: this.headersPost
    });
    //biblioteca.confa.co:8181
    return new Promise ((resolve, reject) => {
      this.http.post(this.urlService+'/api/theme', body, optionspost)
      .subscribe(res =>{
        resolve(res);
      },(err) => {
        resolve(err);                                             
      });
    });
  }

  changeStatusTheme(theme_id) {
    this.headersPost = new Headers({
      'Content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    });

    let optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise ((resolve, reject) => {
      this.http.get(this.urlService+'/api/changeStatusTheme/'+theme_id, optionspost)
      .subscribe(res =>{
        resolve(res);
      },(err) => {
        resolve(err);                                             
      });
    });
  }

}

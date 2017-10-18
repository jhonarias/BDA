import { Injectable } from '@angular/core';
import { Theme } from "./theme";
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ThemeService {

  bookList:Array<Theme>;
  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;
  urlService = 'http://bdc.app/';

  constructor() { }

}

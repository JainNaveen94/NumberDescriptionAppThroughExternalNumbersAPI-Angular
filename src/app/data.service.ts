import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  url: string = "http://numbersapi.com/";

  constructor(private http: HttpClient) { }

  getFact(input: string ) {
    return this.http.get(this.url+input+'/', {responseType: 'text'});
  }
}

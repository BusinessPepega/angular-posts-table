import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
  apiUrl='https://jsonplaceholder.typicode.com/posts';  
  constructor(private http: HttpClient) { };
  
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}

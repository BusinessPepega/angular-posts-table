import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostListService } from 'src/app/services/post-list.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  posts!: Observable<Post[]>;

  constructor(private postList: PostListService, private router: Router) {}

  ngOnInit() {
    this.posts = this.postList.getPosts();
    console.log(this.posts)
  }

  moveToDetails(id: number) {
    this.router.navigate([`posts/${id}`]);
  }
}

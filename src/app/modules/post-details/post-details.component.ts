import { Component, OnInit } from '@angular/core';
import { PostDetailsService } from 'src/app/services/post-details.service';
import { Post } from 'src/app/models/post.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post!: Post;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postDetails: PostDetailsService
  ) {}

  ngOnInit(): void {
    this.postDetails
      .getPostDetails(this.route.snapshot.params['id'])
      .subscribe((Post) => (this.post = Post));
  }  
}

import { Component, OnInit } from '@angular/core';
import { Post } from '../Interfaces/Post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts: Post[] = [
    {title: "Post 1", thought:"This is the body of post 1"},
    {title: "Post 2", thought:"This is the body of post 2"}
  ]

  onSubmit(post:Post) {
    this.posts.push(post);
  }

  onDelete(post:Post) {
    this.posts = this.posts.filter( p => p != post);
  }
}
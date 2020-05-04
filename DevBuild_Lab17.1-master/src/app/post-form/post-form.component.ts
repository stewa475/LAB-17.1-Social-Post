import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../Interfaces/Post';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Post>();
  title:string;
  thought:string;
  constructor() { }

  ngOnInit(): void {
  }

  submitPost = function() {
    let newPost: Post = {title: this.title, thought: this.thought}
    this.submitted.emit(newPost);

    this.title = '';
    this.thought = '';
  }

}

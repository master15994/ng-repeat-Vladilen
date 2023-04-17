import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  title = '';
  text = '';

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        text: this.text,
        title: this.title,
      };
      this.onAdd.emit(post);
      console.log('New Post', post);
      this.title = this.text = '';
    }
  }
}

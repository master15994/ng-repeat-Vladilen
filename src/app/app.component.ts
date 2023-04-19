import { Component } from '@angular/core';
export interface Post {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  search = '';
  fieldTitle = 'title';
  posts: Post[] = [
    { title: 'Bear', text: 'Best bear ever' },
    { title: 'Pineapple', text: 'The most delelius fruit in the world' },
    { title: 'Coffe', text: 'Who doesnt like coffe?' },
  ];

  // n = 0.19;
  // e = Math.E;
  // str = 'whats up';
  // date: Date = new Date();

  // obj = {
  //   a: {
  //     b: 2,
  //   },
  //   c: {
  //     g: 6,
  //   },
  //   l: 77,
  // };

  // isVisible = false;
  // posts: Post[] = [
  //   {
  //     title: 'Be health',
  //     text: 'If you wanna be ok,wash u penus everyday',
  //     id: 1,
  //   },
  //   { title: 'Not health', text: 'Drink dark bear every morning', id: 2 },
  // ];
  // updatePosts(post: Post) {
  //   this.posts.unshift(post);
  //   console.log('Post', post);
  // }
  // objs = [
  //   {
  //     title: 'Post2',
  //     author: 'Bek2',
  //     comments: [
  //       { name: 'Mike2', text: 'lorem2' },
  //       { name: 'Mike2', text: 'lorem2' },
  //       { name: 'Mike2', text: 'lorem2' },
  //     ],
  //   },
  //   {
  //     title: 'Post',
  //     author: 'Bek1',
  //     comments: [
  //       { name: 'Mike', text: 'lorem1' },
  //       { name: 'Mike', text: 'lorem1' },
  //       { name: 'Mike', text: 'lorem1' },
  //     ],
  //   },
  // ];
  // array = [1, 1, 3, 4, 5, 6, 13];
  // title = '';
  // onInput(event:any) {
  //   this.title = event.target.value;
  // }
  // inputValue = '';
  // backgorundToggle1 = false;
  // backgorundToggle = false;
  // img =
  //   'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-bleu.png';
  // constructor() {
  //   setTimeout(() => {
  //     this.img =
  //       'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-vert.png';
  //   }, 3000);
  // }
  // onInput(event?: any) {
  //   this.inputValue = event.target.value;
  // }
}

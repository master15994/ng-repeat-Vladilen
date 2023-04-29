import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { WebsiteService } from './service/website.service';
import { AppCounterService } from './service/app-counter.service';
import { LocalCounterService } from './service/local-counter.service';
import {
  Form,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MyValidators } from './validators/new-validators';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, pipe } from 'rxjs';
import { Todo, newService } from './new-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';
  loading = false;

  constructor(private newtodo: newService) {}

  ngOnInit(): void {
    this.fetchTodo();
  }
  fetchTodo() {
    this.loading = false;
    this.newtodo.fetchTodo().subscribe((todos) => {
      this.todos = todos;
      this.loading = true;
    });
  }

  removeTodo(id: any) {
    this.newtodo.removeTodo(id).subscribe((res) => {
      // console.log(res);

      this.todos = this.todos.filter((t) => t.id !== id);
    });
  }

  addTitle() {
    if (!this.todoTitle.trim()) {
      return;
    }

    this.newtodo
      .addTodo({
        title: this.todoTitle,
        completed: false,
      })
      .subscribe((todo) => {
        this.todos.push(todo);
        this.todoTitle = '';
      });
  }

  // appState = 'on';
  // ngOnInit(): void {}
  // form!: FormGroup;
  // idx!: string | number | null;

  // ngOnInit(): void {
  //   this.form = new FormGroup({
  //     email: new FormControl('', [
  //       Validators.email,
  //       Validators.required,
  //       MyValidators.restrictedEmails,
  //     ]),
  //     password: new FormControl(null, [
  //       Validators.required,
  //       Validators.minLength(8),
  //     ]),
  //     address: new FormGroup({
  //       country: new FormControl('by'),
  //       city: new FormControl('', Validators.required),
  //     }),
  //     skills: new FormArray([]),
  //   });
  // }

  // addSkill() {
  //   const control = new FormControl('', Validators.required);
  //   // (this.form.get('skills') as FormArray).push(control);
  //   (<FormArray>this.form.get('skills')).push(control);
  // }
  // setCapital() {
  //   const cityMap = { ru: 'Москва', by: 'Минск', ua: 'Киев' };

  //   const cityKey = this.form.get('address')?.get('country')?.value;

  //   this.form.patchValue({ address: { cityKey } });
  // }
  // submit() {
  //   if (this.form.valid) {
  //     console.log('Form: ', this.form);
  //     const formData = { ...this.form.value };
  //     console.log('Form data:', formData);

  //     this.form.reset();
  //   }
  // }
  // constructor(
  //   public localCounterService: LocalCounterService,

  //   public appCounterService: AppCounterService
  // ) {}

  // constructor(private service: WebsiteService) {}
  // movie: any;
  // ngOnInit(): void {
  //   this.service.read().subscribe((result) => {
  //     this.movie = result;
  //   });
  // }
  // constructor(private service: WebsiteService) {}
  // film: any;
  // ngOnInit(): void {
  //   this.service.read().subscribe((result) => {
  //     this.film = result;
  //   });
  //   console.log(this.film);
  // }
  // constructor(private service: ServiceService) {}
  // ngOnInit(): void {
  //   this.service.read().subscribe();
  // }
  // constructor(private service: ServiceService) {}
  // luke: any;
  // ngOnInit(): void {
  //   this.service.read().subscribe((result) => {
  //     this.luke = result;
  //   });
  // }
  // lukeObserve() {
  //   console.log(this.luke);
  // }
  // ngOnInit(): void {
  //   let yavin;
  //   this.service.read().subscribe((result) => {
  //     yavin = result;
  //     console.log(yavin);
  //   });
  // }
  // constructor(private service: ServiceService) {}
  // ngOnInit(): void {
  //   this.service.read().subscribe();
  // }
  // search = '';
  // fieldTitle = 'title';
  // posts: Post[] = [
  //   { title: 'Bear', text: 'Best bear ever' },
  //   { title: 'Pineapple', text: 'The most delelius fruit in the world' },
  //   { title: 'Coffe', text: 'Who doesnt like coffe?' },
  // ];
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

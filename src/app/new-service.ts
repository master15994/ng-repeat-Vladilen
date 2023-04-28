import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}
@Injectable({
  providedIn: 'root',
})
export class newService {
  constructor(private http: HttpClient) {}

  removeTodo(id: any) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  fetchTodo(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .pipe(delay(400));
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>(
      'https://jsonplaceholder.typicode.com/todos',
      todo
    );
    // .subscribe((todo) => {
    //   this.todos.push(todo);
    //   this.todoTitle = '';
    // });}
  }
}

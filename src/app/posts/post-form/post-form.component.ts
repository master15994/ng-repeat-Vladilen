import {
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
// import { Post } from '../../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
// implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy
export class PostFormComponent {
  // @Input() post!: Post;
  // * -------------------------- Lifycycle Hooks ---------------------
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges', changes);
  // }
  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  // ngOnDestroy(): void {}
}

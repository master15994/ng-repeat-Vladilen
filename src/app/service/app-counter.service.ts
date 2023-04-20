import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppCounterService {
  counter = 0;
  increace() {
    this.counter++;
  }
  decreace() {
    this.counter--;
  }
  constructor() {}
}

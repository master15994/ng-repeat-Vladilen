import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exMark',
})
export class ExMarkPipe implements PipeTransform {
  transform(str: string): string {
    return `${str.trim()}!!!!-No way`;
  }
}

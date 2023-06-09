import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class MyValidators {
  static restrictedEmails(control: FormControl): ValidationErrors | null {
    if (['v@mail.ru', 'd@mail.ru'].includes(control.value)) {
      return { restrictedEmails: true };
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'n@mail.ru') {
          resolve({
            uniqEmail: true,
          });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}

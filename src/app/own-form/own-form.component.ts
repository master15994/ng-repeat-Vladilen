import { Component, Provider, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { switchAll } from 'rxjs';

const VALUR_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => OwnFormComponent),
  multi: true,
};
@Component({
  selector: 'app-own-form',
  templateUrl: './own-form.component.html',
  styleUrls: ['./own-form.component.scss'],
  providers: [VALUR_ACCESSOR],
})
export class OwnFormComponent implements ControlValueAccessor {
  state = 'off';
  private onChange = (value: any) => {};

  setState(state: string) {
    this.state = state;

    this.onChange(this.state);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  writeValue(state: string): void {
    this.state = state;
  }

  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}

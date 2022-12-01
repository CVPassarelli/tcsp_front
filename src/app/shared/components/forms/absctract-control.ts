import { Component, Input, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
} from '@angular/forms';

@Component({
  selector: 'app-input-text-test',
  template: '<div></div>',
})
export class AbstractControlsForm implements ControlValueAccessor {
  onChange = (value) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  @Input() label: string = '';
  @Input() placeHolder: string = '';
  @Input() error: boolean = false;
  @ViewChild(FormControlDirective, { static: true })
  value: any = '';

  constructor() {}

  setValue(value: any) {
    this.onChange(value.target.value);
  }

  setChecked(value: any) {
    this.onChange(value.target.checked);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

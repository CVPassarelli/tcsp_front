import {
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  ViewChild,
} from '@angular/core';
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

  changeDetectorRef = inject(ChangeDetectorRef);

  setValue(value: any) {
    this.onChange(value.target.value);
  }

  setChecked(value: any) {
    this.onChange(value.target.checked);
  }

  writeValue(value: any): void {
    this.value = value;
    this.changeDetectorRef.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.changeDetectorRef.detectChanges();
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

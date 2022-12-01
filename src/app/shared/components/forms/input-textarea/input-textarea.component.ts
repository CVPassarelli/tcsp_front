import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { AbstractControlsForm } from '../absctract-control';
import { FormsDependenciesModule } from '../forms.module';

@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [CommonModule, FormsDependenciesModule],
  templateUrl: './input-textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputTextAreaComponent,
      multi: true,
    },
  ],
})
export class InputTextAreaComponent extends AbstractControlsForm {}

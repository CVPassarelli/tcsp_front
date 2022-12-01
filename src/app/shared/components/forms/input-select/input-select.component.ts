import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsDependenciesModule } from '../forms.module';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractControlsForm } from '../absctract-control';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [CommonModule, FormsDependenciesModule],
  templateUrl: './input-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputSelectComponent,
      multi: true,
    },
  ],
})
export class InputSelectComponent extends AbstractControlsForm {
  @Input() options = [];
}

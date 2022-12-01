import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractControlsForm } from '../absctract-control';
import { FormsDependenciesModule } from '../forms.module';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [CommonModule, FormsDependenciesModule],
  templateUrl: './input-number.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputNumberComponent,
      multi: true,
    },
  ],
})
export class InputNumberComponent extends AbstractControlsForm {
  @Input() min = 1;
  @Input() max = 99999999999;
  @Input() step = 1;
}

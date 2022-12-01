import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsDependenciesModule } from '../forms.module';
import { AbstractControlsForm } from '../absctract-control';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-switch',
  standalone: true,
  imports: [CommonModule, FormsDependenciesModule],
  templateUrl: './input-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputSwitchComponent,
      multi: true,
    },
  ],
})
export class InputSwitchComponent extends AbstractControlsForm  {

}

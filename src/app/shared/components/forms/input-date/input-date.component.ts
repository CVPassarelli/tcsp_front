import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsDependenciesModule } from '../forms.module';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractControlsForm } from '../absctract-control';

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [CommonModule, FormsDependenciesModule],
  templateUrl: './input-date.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputDateComponent,
      multi: true,
    },
  ],
})
export class InputDateComponent extends AbstractControlsForm {}

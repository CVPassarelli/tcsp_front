import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsDependenciesModule } from '../forms.module';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractControlsForm } from '../absctract-control';

@Component({
  selector: 'app-input-chekcbox',
  standalone: true,
  imports: [CommonModule, FormsDependenciesModule],
  templateUrl: './input-chekcbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputChekcboxComponent,
      multi: true,
    },
  ],
})
export class InputChekcboxComponent extends AbstractControlsForm {

}

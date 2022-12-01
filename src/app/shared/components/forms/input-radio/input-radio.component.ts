import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsDependenciesModule } from '../forms.module';

@Component({
  selector: 'app-input-radio',
  standalone: true,
  imports: [CommonModule, FormsDependenciesModule],
  templateUrl: './input-radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputRadioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

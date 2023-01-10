import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastyService } from './toasty.service';

export type TRequestType = 'SUCCESS' | 'ERROR';
@Component({
  selector: 'app-toasty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toasty.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastyComponent implements OnInit {
  toastyService = inject(ToastyService);
  toasty$ = this.toastyService.toasty$;

  ngOnInit(): void {}

  types: TRequestType = 'SUCCESS';

  @Input() message: string = '';
}

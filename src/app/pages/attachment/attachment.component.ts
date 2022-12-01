import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attachment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attachment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttachmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

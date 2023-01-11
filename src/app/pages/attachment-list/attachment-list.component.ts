import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestServiceService } from 'src/app/core/services/request-service.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { FormsDependenciesModule } from 'src/app/shared/components/forms/forms.module';

@Component({
  selector: 'app-attachment-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsDependenciesModule,
  ],
  templateUrl: './attachment-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: RequestServiceService, useClass: RequestServiceService },
  ],
})
export class AttachmentListComponent {
  faEdit = faEdit;
  faFileUpload = faFileUpload;
  constructor(private service: RequestServiceService) {
    this.getPurchaseList();
  }

  purchaseList$: Observable<any>;

  getPurchaseList() {
    this.purchaseList$ = this.service.getPurchaseList('DRAFT');
  }
}

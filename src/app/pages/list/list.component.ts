import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsDependenciesModule } from 'src/app/shared/components/forms/forms.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { RequestServiceService } from 'src/app/core/services/request-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsDependenciesModule,
    FontAwesomeModule,
    RouterModule,
  ],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: RequestServiceService, useClass: RequestServiceService },
  ],
})
export class ListComponent {
  faTrash = faTrash;
  faEdit = faEdit;
  faPlus = faPlus;
  subscription = new Subscription();

  constructor(private service: RequestServiceService) {
    this.getPurchaseList();
  }

  purchaseList$: Observable<any>;

  getPurchaseList() {
    this.purchaseList$ = this.service.getPurchaseList();
  }

  deleteitem(purchaseCode: string) {
    const subscripe = this.service
      .deleteById(purchaseCode)
      .pipe(
        tap((_) => {
          this.getPurchaseList();
        })
      )
      .subscribe();
    this.subscription.add(subscripe);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  EStatus,
  RequestServiceService,
} from 'src/app/core/services/request-service.service';
import { FormsDependenciesModule } from 'src/app/shared/components/forms/forms.module';
import { merge, Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastyService } from 'src/app/shared/components/toasty/toasty.service';

@Component({
  selector: 'app-listagem-emissao',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsDependenciesModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './listagem-emissao.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: RequestServiceService, useClass: RequestServiceService },
  ],
})
export class ListagemEmissaoComponent implements OnInit, OnDestroy {
  emissionList$: Observable<any>;
  selectedList: Array<string> = [];
  subscription = new Subscription();
  constructor(
    private service: RequestServiceService,
    private toastyService: ToastyService
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getFullList();
  }

  getSentList() {
    return this.service.getPurchaseList('SENT');
  }

  getPendingList() {
    return this.service.getPurchaseList('PENDING_SUBMISSION');
  }

  getFullList() {
    this.emissionList$ = merge(this.getSentList(), this.getPendingList());
  }

  statusToString(value) {
    return EStatus[value];
  }

  toggleItem(id) {
    const index = this.selectedList.indexOf(id);
    index < 0 ? this.selectedList.push(id) : this.selectedList.splice(index, 1);
  }

  emitir() {
    const subscription = this.service
      .emitirPedidos(this.selectedList)
      .subscribe(() => {
        this.toastyService.show('SUCCESS');
        this.getFullList();
      });

    this.subscription.add(subscription);
  }
}

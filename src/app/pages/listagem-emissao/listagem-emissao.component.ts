import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RequestServiceService } from 'src/app/core/services/request-service.service';
import { FormsDependenciesModule } from 'src/app/shared/components/forms/forms.module';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listagem-emissao',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsDependenciesModule,
    FormsModule,
  ],
  templateUrl: './listagem-emissao.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: RequestServiceService, useClass: RequestServiceService },
  ],
})
export class ListagemEmissaoComponent implements OnInit {
  emissionList$: Observable<any>;
  selectedList = Array<string>;
  constructor(private service: RequestServiceService) {
    this.getEmissionList();
  }

  ngOnInit(): void {}

  getEmissionList() {
    this.emissionList$ = this.service.getEmisisonList();
  }

  teste() {
    console.log(this.selectedList);
  }
}

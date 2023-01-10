import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,

    children: [
      {
        path: 'listagem',
        loadComponent: () =>
          import('./list/list.component').then((m) => m.ListComponent),
      },
      {
        path: 'novo-pedido',
        loadComponent: () =>
          import('./new-request/new-request.component').then(
            (m) => m.NewRequestComponent
          ),
      },
      {
        path: 'novo-pedido/:id',
        loadComponent: () =>
          import('./new-request/new-request.component').then(
            (m) => m.NewRequestComponent
          ),
      },
      {
        path: 'anexar-comprovante/:id',
        loadComponent: () =>
          import('./attachment/attachment.component').then(
            (m) => m.AttachmentComponent
          ),
      },
      {
        path: 'lista-comprovante',
        loadComponent: () =>
          import('./attachment-list/attachment-list.component').then(
            (m) => m.AttachmentListComponent
          ),
      },
      {
        path: 'lista-emissao',
        loadComponent: () =>
          import('./listagem-emissao/listagem-emissao.component').then(
            (m) => m.ListagemEmissaoComponent
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [],
})
export class AuthModule {}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEmissaoComponent } from './listagem-emissao.component';

describe('ListagemEmissaoComponent', () => {
  let component: ListagemEmissaoComponent;
  let fixture: ComponentFixture<ListagemEmissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ListagemEmissaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemEmissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

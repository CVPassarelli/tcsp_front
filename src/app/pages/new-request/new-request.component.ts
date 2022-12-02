import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { InputChekcboxComponent } from 'src/app/shared/components/forms/input-chekcbox/input-chekcbox.component';
import { InputDateComponent } from 'src/app/shared/components/forms/input-date/input-date.component';
import { InputRadioComponent } from 'src/app/shared/components/forms/input-radio/input-radio.component';
import { InputSelectComponent } from 'src/app/shared/components/forms/input-select/input-select.component';
import { InputSwitchComponent } from 'src/app/shared/components/forms/input-switch/input-switch.component';
import { InputTextComponent } from 'src/app/shared/components/forms/input-text/input-text.component';

import {
  modalidadeCompra,
  instrumentoConvocatorio,
  modoDeDisputa,
  criterioJulgamento,
  situacaoCompra,
  situacaoItemCompra,
  tipoBeneficio,
  situacaoResultadoItem,
  tipoContrato,
  termoContrato,
  categoriaProcesso,
  tipoDocumento,
  naturezaJuridica,
  porteEmpresa,
  amparoLegal,
  planoContratacao,
  convocatorioDisputa,
  convocatorioAmparo,
  materialServico,
} from './domains';
import { InputNumberComponent } from 'src/app/shared/components/forms/input-number/input-number.component';
import { InputTextAreaComponent } from 'src/app/shared/components/forms/input-textarea/input-textarea.component';
import { dateToInput, inputToIsoDate } from 'src/app/shared/classes/utils';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RequestServiceService } from 'src/app/core/services/request-service.service';

@Component({
  selector: 'app-new-request',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextComponent,
    InputChekcboxComponent,
    InputDateComponent,
    InputRadioComponent,
    InputSelectComponent,
    InputSwitchComponent,
    InputNumberComponent,
    InputTextAreaComponent,
  ],
  templateUrl: './new-request.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: RequestServiceService, useClass: RequestServiceService },
  ],
})
export class NewRequestComponent implements OnInit, OnDestroy {
  changeDetectorRef = inject(ChangeDetectorRef);
  subscription = new Subscription();

  instrumentoConvocatorio = instrumentoConvocatorio;
  modalidadeCompra = modalidadeCompra;
  modoDeDisputa = modoDeDisputa;
  criterioJulgamento = criterioJulgamento;
  situacaoCompra = situacaoCompra;
  situacaoItemCompra = situacaoItemCompra;
  tipoBeneficio = tipoBeneficio;
  situacaoResultadoItem = situacaoResultadoItem;
  tipoContrato = tipoContrato;
  termoContrato = termoContrato;
  categoriaProcesso = categoriaProcesso;
  tipoDocumento = tipoDocumento;
  naturezaJuridica = naturezaJuridica;
  porteEmpresa = porteEmpresa;
  amparoLegal = amparoLegal;
  planoContratacao = planoContratacao;
  convocatorioDisputa = convocatorioDisputa;
  convocatorioAmparo = convocatorioAmparo;
  materialServico = materialServico;

  minAnoCompra: number = new Date().getFullYear();

  form: FormGroup = this.fb.group({
    codigoUnidadeCompradora: ['TCESP', Validators.required],
    tipoInstrumentoConvocatorioId: [null, Validators.required],
    modalidadeId: ['', Validators.required],
    modoDisputaId: ['', Validators.required],
    numeroCompra: ['', Validators.required],
    anoCompra: ['', Validators.required],
    numeroProcesso: ['', Validators.required],
    objetoCompra: ['', Validators.required],
    informacaoComplementar: [''],
    srp: [false],
    orcamentoSigiloso: [false],
    dataAberturaProposta: ['', Validators.required],
    dataEncerramentoProposta: ['', Validators.required],
    amparoLegalId: ['', Validators.required],
    linkSistemaOrigem: ['', Validators.required],
    itensCompra: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: RequestServiceService,
    private router: Router
  ) {}

  haveParam: boolean = false;
  purchaseId: string;

  ngOnInit(): void {
    this.haveParam = !!this.activatedRoute.snapshot.params['id'];
    if (this.haveParam) {
      this.purchaseId = this.activatedRoute.snapshot.params['id'];
      const subscriber = this.service
        .getPurchaseById(this.purchaseId)
        .subscribe((payload) => {
          this.handleFormInitialState(payload);
        });
      this.subscription.add(subscriber);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get itensCompra(): FormArray {
    return <FormArray>this.form.get('itensCompra');
  }

  addItem() {
    this.itensCompra.push(this.createNewItem());
  }

  removeUser(index: number) {
    this.itensCompra.removeAt(index);
  }

  createNewItem(): FormGroup {
    return this.fb.group({
      numeroItem: [this.itensCompra.length + 1, Validators.required],
      materialOuServico: ['', Validators.required],
      tipoBeneficioId: ['', Validators.required],
      incentivoProdutivoBasico: [false],
      descricao: [''],
      quantidade: ['', Validators.required],
      unidadeMedida: ['', Validators.required],
      valorUnitarioEstimado: ['', Validators.required],
      valorTotal: ['', Validators.required],
      criterioJulgamentoId: ['', Validators.required],
    });
  }

  submitForm() {
    const payload = {
      ...this.form.value,
      dataEncerramentoProposta: inputToIsoDate(
        this.form.controls['dataEncerramentoProposta'].value
      ),
      dataAberturaProposta: inputToIsoDate(
        this.form.controls['dataAberturaProposta'].value
      ),
    };
    if (this.haveParam) {
      const sub = this.service
        .updatePurchase(payload, this.purchaseId)
        .subscribe((_) => this.router.navigateByUrl('/auth/listagem'));
      this.subscription.add(sub);
    } else {
      const sub = this.service
        .createPurchase(payload)
        .subscribe((_) => this.router.navigateByUrl('/auth/listagem'));
      this.subscription.add(sub);
    }
  }

  handleFormInitialState(payload) {
    const keys = Object.keys(this.form.controls);

    keys.forEach((key) => {
      this.form.controls[key].patchValue(payload[key]);
    });

    this.form.controls['dataAberturaProposta'].patchValue(
      dateToInput(payload['dataAberturaProposta'])
    );
    this.form.controls['dataEncerramentoProposta'].patchValue(
      dateToInput(payload['dataEncerramentoProposta'])
    );

    for (let index = 0; index < payload['itensCompra'].length; index++) {
      this.addItem();
      this.itensCompra.controls[index].patchValue(
        payload['itensCompra'][index]
      );
    }
    this.changeDetectorRef.detectChanges();
  }
}

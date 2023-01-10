import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSelectComponent } from 'src/app/shared/components/forms/input-select/input-select.component';
import { HttpClientModule } from '@angular/common/http';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  EMPTY,
  map,
  merge,
  Observable,
  ReplaySubject,
  Subscription,
  switchMap,
} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RequestServiceService } from 'src/app/core/services/request-service.service';
import { tipoDocumento } from '../new-request/domains';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFileUpload,
  faClose,
  faEyeLowVision,
} from '@fortawesome/free-solid-svg-icons';
import { ToastyService } from 'src/app/shared/components/toasty/toasty.service';

const extentions = [
  'pdf',
  'txt',
  'rtf',
  'doc',
  'docx',
  'odt',
  'sxw',
  'zip',
  '7z',
  'rar',
  'dwg',
  'dwt',
  'dxf',
  'dwf',
  'dwfx',
  'svg',
  'sldprt',
  'sldasm',
  'dgn',
  'ifc',
  'skp',
  '3ds',
  'dae',
  'obj',
  'rfa',
  'rte',
];

@Component({
  selector: 'app-attachment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputSelectComponent,
    FontAwesomeModule,
  ],
  templateUrl: './attachment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: RequestServiceService, useClass: RequestServiceService },
  ],
})
export class AttachmentComponent implements OnInit {
  changeDetectorRef = inject(ChangeDetectorRef);
  subscription = new Subscription();

  //@ViewChild('inputFiles') inputFiles: ElementRef;
  tipoDocumento = tipoDocumento;
  fileList = [];
  convertedFileList = [];
  faFileUpload = faFileUpload;
  faClose = faClose;
  purchaseId: string;
  files$: Observable<any>;

  form: FormGroup = this.fb.group({
    arquivos: this.fb.array([]),
  });
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: RequestServiceService,
    private toastyService: ToastyService
  ) {}

  ngOnInit(): void {
    this.purchaseId = this.activatedRoute.snapshot.params['id'];
    this.files$ = this.handleDocuments(this.purchaseId);
  }

  get fileControl(): FormArray {
    return <FormArray>this.form.get('arquivos');
  }

  addItem() {
    this.fileControl.push(this.createNewItem());
  }

  removeFileControl(index: number) {
    this.fileControl.removeAt(index);
  }

  createNewItem(): FormGroup {
    return this.fb.group({
      tipoDocumento: ['', Validators.required],
      arquivo: [null, Validators.required],
    });
  }

  getValidity(i: number) {
    return (<FormArray>this.form.get('arquivos')).controls[i].invalid;
  }

  selectFile(event, index: number) {
    console.log(
      (<FormArray>this.form.get('arquivos')).controls[index].get(
        'tipoDocumento'
      ).value,
      index
    );
    const file = event.target.files[0];
    if (this.validateFileType(file.name)) {
      console.log(this.validateFileType(file.name));
      this.convertFile(file).subscribe((base64) => {
        this.convertedFileList.push({
          tituloDocumento: file.name,
          extensao: file.name.split('.')[1],
          arquivo: base64,
        });
        console.log(this.convertedFileList);
        this.changeDetectorRef.detectChanges();
      });
    }
    // this.inputFiles.nativeElement.value = '';
  }

  submitForm() {
    console.log(this.form);
    this.convertedFileList.forEach((file, index) => {
      file['tipoDocumento'] = (<FormArray>this.form.get('arquivos')).controls[
        index
      ].get('tipoDocumento').value;
    });
    console.log(this.convertedFileList);
    this.service
      .uploadFiles(this.convertedFileList, this.purchaseId)
      .pipe(
        switchMap(() => {
          merge(this.files$, this.handleDocuments(this.purchaseId));
          return EMPTY;
        })
      )
      .subscribe((value) => {
        console.log(value);
        this.toastyService.show('SUCCESS');
      });
    console.log(this.form.value);
  }

  validateFileType(fileName: string) {
    const fileExtension = fileName.split('.');
    return extentions.includes(fileExtension[1]) && fileExtension.length === 2;
  }

  removeFile(index: number) {
    this.convertedFileList.splice(index, 1);
    this.removeFileControl(index);
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) =>
      result.next(btoa(event.target.result.toString()));
    return result;
  }

  handleDocuments(purchaseId) {
    return this.service.getDoucmentsFilesById(purchaseId).pipe(
      map((value) => {
        console.log(value);
        return value;
      })
    );
  }

  downloadFileSelected(fileId) {
    this.service
      .getDoucmentsFilesById(fileId)
      .pipe(
        map((value) => {
          console.log(value);
          return value;
        })
      )
      .subscribe();
  }

  deleteFileSelected(fileId) {
    this.service
      .deleteDoucmentsFilesById(fileId)
      .pipe(
        switchMap(() => {
          merge(this.files$, this.handleDocuments(this.purchaseId));
          return EMPTY;
        })
      )
      .subscribe();
  }
}

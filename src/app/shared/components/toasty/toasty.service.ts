import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TRequestType } from './toasty.component';

export class ToastyService {
  toastySubject$ = new BehaviorSubject<TRequestType>(null);
  toasty$ = this.toastySubject$.asObservable();

  show(message: TRequestType) {
    this.toastySubject$.next(message);
    setTimeout(() => {
      this.hide();
    }, 3000);
  }

  hide() {
    this.toastySubject$.next(null);
  }
}

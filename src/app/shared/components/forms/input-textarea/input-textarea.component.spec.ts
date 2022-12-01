import { ComponentFixture, TestBed } from '@angular/core/testing';

import { textarea } from './input-textarea.component';

describe('textarea', () => {
  let component: textarea;
  let fixture: ComponentFixture<textarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [textarea],
    }).compileComponents();

    fixture = TestBed.createComponent(textarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

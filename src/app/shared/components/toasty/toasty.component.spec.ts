import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastyComponent } from './toasty.component';

describe('ToastyComponent', () => {
  let component: ToastyComponent;
  let fixture: ComponentFixture<ToastyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ToastyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

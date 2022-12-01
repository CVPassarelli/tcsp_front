import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChekcboxComponent } from './input-chekcbox.component';

describe('InputChekcboxComponent', () => {
  let component: InputChekcboxComponent;
  let fixture: ComponentFixture<InputChekcboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InputChekcboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputChekcboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

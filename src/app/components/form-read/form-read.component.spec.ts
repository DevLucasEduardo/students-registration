import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReadComponent } from './form-read.component';

describe('FormReadComponent', () => {
  let component: FormReadComponent;
  let fixture: ComponentFixture<FormReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReadComponent]
    });
    fixture = TestBed.createComponent(FormReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

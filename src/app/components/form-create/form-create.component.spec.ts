import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateComponent } from './form-create.component';

describe('FormCreateComponent', () => {
  let component: FormCreateComponent;
  let fixture: ComponentFixture<FormCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateComponent]
    });
    fixture = TestBed.createComponent(FormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateDrivenComponent } from './form-template-driven.component';
import { SharedModule } from '../shared-module.module';
import { ModalComponent } from '../modal/modal.component';

describe('FormTemplateDrivenComponent', () => {
  let component: FormTemplateDrivenComponent;
  let fixture: ComponentFixture<FormTemplateDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [FormTemplateDrivenComponent],
      providers: [ModalComponent]
    });
    fixture = TestBed.createComponent(FormTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Formulário Orientado a Template deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});

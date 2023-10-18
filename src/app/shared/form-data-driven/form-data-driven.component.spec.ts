import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataDrivenComponent } from './form-data-driven.component';
import { SharedModule } from '../shared-module.module';
import { ModalComponent } from '../modal/modal.component';

describe('FormDataDrivenComponent', () => {
  let component: FormDataDrivenComponent;
  let fixture: ComponentFixture<FormDataDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [FormDataDrivenComponent],
      providers: [ModalComponent]
    });
    fixture = TestBed.createComponent(FormDataDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Formulário Orientado a Dados deve ser Criado', () => {
    expect(component).toBeTruthy();
  });
});

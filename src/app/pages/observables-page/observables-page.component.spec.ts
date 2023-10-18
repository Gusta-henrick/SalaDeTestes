import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesPageComponent } from './observables-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared-module.module';

describe('ObservablesPageComponent', () => {
  let component: ObservablesPageComponent;
  let fixture: ComponentFixture<ObservablesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule],
      declarations: [ObservablesPageComponent],
      providers: [HttpClient]
    });
    fixture = TestBed.createComponent(ObservablesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Página de Observables deve ser criada com sucesso', () => {
    expect(component).toBeTruthy();
  });
});

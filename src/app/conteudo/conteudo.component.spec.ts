import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoComponent } from './conteudo.component';
import { AppRoutingModule } from '../app-routing.module';

describe('ConteudoComponent', () => {
  let component: ConteudoComponent;
  let fixture: ComponentFixture<ConteudoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [ConteudoComponent]
    });
    fixture = TestBed.createComponent(ConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Container de conteúdo deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});

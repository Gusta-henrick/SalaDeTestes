import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsPageComponent } from './forms-page.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { SharedModule } from 'src/app/shared/shared-module.module';


describe('FormsPageComponent', () => {
  let component: FormsPageComponent;
  let fixture: ComponentFixture<FormsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers:[ModalComponent],
      declarations: [FormsPageComponent]
    });
    fixture = TestBed.createComponent(FormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Página de formulário deve ser criada', () => {
    expect(component).toBeTruthy();
  });
});

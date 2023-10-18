import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data-driven',
  templateUrl: './form-data-driven.component.html',
  styleUrls: ['./form-data-driven.component.scss']
})
export class FormDataDrivenComponent {
  constructor(public modalComponent: ModalComponent){}

  public formData!: FormGroup;
  modal = new ModalComponent; 

  ngOnInit(): void {
    this.formData = new FormGroup({
      primeiroNome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      confirmarSenha: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
    });
  }
  

  public onSubmit(){
    this.modal.toggle();
  }
}

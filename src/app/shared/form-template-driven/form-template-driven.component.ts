import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.scss']
})
export class FormTemplateDrivenComponent {
  constructor(public modalComponent: ModalComponent){ }

  myForm: NgForm;
  modal = new ModalComponent;

  public onSubmit(myForm : NgForm){
    if(myForm.valid){
      this.myForm = myForm.value;

      this.modal.toggle();
      console.log(myForm);
    }
  }
}

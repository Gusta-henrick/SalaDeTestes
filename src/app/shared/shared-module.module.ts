import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { ModalComponent } from './modal/modal.component';
import { FormDataDrivenComponent } from './form-data-driven/form-data-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ButtonComponent } from './menu/button/button.component';



@NgModule({
  declarations: [
    FormTemplateDrivenComponent,
    ModalComponent,
    FormDataDrivenComponent,
    MenuComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    ModalComponent,
  ],
  exports: [
    FormTemplateDrivenComponent,
    ModalComponent,
    FormDataDrivenComponent,
    MenuComponent,
    ButtonComponent
  ]
})
export class SharedModule { }

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-page',
  templateUrl: './forms-page.component.html',
  styleUrls: ['./forms-page.component.scss']
})
export class FormsPageComponent {
  formUsuario: FormGroup;

  createForm(usuario: any){
    this.formUsuario = new FormGroup({
      nome: new FormControl(usuario.nome),
      sobrenome: new FormControl(usuario.sobrenome),
      genero: new FormControl(usuario.genero),
      dataNascimento: new FormControl(usuario.dataNascimento)
    })
  }
}

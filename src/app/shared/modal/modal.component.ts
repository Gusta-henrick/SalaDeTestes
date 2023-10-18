import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

@Injectable()
export class ModalComponent {
  mostrar: boolean = false;

  public toggle () {
    this.mostrar = !this.mostrar;
  }
}

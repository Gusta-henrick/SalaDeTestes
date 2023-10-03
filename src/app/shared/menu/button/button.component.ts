import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() texto!: string;
  @Input() fundoImagem!: string;
  @Input() rota!: string;


  @Output() eventoScroll = new EventEmitter();

  public enviarCoordenadas(event: any){
    this.eventoScroll.emit(event);
  }
}

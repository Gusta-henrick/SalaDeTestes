import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  
  @ViewChild('scroll') navbar!: ElementRef;

  public scrollAutomatico(event: any){
    let cordY = event.clientY;
    let cordX = event.clientX;
    this.navbar.nativeElement.scroll((cordX- 170), cordY);
  }

  public scrollAutomaticoEnd(event: any){
    setTimeout(() =>{
      let cordY = event.clientY;
      let cordX = event.clientX;
      this.navbar.nativeElement.scroll((cordX + 170), cordY);
    }, 400);
  }
}

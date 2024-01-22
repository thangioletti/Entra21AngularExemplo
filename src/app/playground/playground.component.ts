import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
  public oi = "ola";
  public resposta = "";

  public outputExemplo(a: any) {
    this.resposta = a;
  }
}

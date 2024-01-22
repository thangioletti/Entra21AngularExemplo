import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.scss']
})
export class AleatorioComponent {

  @Input()
  public exemploInput?: string;

  @Output()
  public respondeu = new EventEmitter();

  public responder() {
    const resposta = "Aleatorio disse oi";
    this.respondeu.emit(resposta);
  }
}

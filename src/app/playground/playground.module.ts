import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { AleatorioModule } from '../aleatorio/aleatorio.module';



@NgModule({
  declarations: [
    PlaygroundComponent
  ],
  imports: [
    CommonModule,
    AleatorioModule
  ],
  exports: [
    PlaygroundComponent
  ]
})
export class PlaygroundModule { }

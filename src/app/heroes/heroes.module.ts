import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { HerolistComponent } from './herolist/herolist.component';



@NgModule({
  declarations: [
    HeroeComponent,
    HerolistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeroeComponent,
    HerolistComponent
  ]
})
export class HeroesModule { }

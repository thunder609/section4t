import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDragonBallComponent } from './pages/main-dbz-components';
import { ListComponent } from './components/list/list.component';
import { AgregarPersonajeComponent } from './components/agregar-personaje/agregar-personaje.component';



@NgModule({
  declarations: [
  MainDragonBallComponent,
  ListComponent,
  AgregarPersonajeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    MainDragonBallComponent
  ]

})
export class DragonballModule { }

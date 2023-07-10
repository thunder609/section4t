import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDragonBallComponent } from './pages/main-dbz-components';
import { ListComponent } from './components/list/list.component';
import { AgregarPersonajeComponent } from './components/agregar-personaje/agregar-personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  MainDragonBallComponent,
  ListComponent,
  AgregarPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainDragonBallComponent
  ]

})
export class DragonballModule { }

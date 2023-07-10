import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/personaje.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-dbz-main-page.html'
})

export class MainDragonBallComponent  {
   constructor(private dbzService:DbzService){

   }
   get personajes():Personaje[]{
    return  [...this.dbzService.personajes]
     }
    onBorradoPersonajesById(id:string):void{
        this.dbzService.borradoPersonajeByID(id);
    }
    onNuevoPersonajes(personaje:Personaje):void{
        this.dbzService.onNuevoPersonaje(personaje);
    }
}

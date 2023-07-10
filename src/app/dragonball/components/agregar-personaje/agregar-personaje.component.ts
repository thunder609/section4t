import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interface/personaje.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent {
  @Output()
 public  nuevoPersonaje: EventEmitter<Personaje>     = new EventEmitter()
  public personajes:Personaje={name:"pedro",
  power:0}
  emitirpersonaje():void{
    if (this.personajes.name.length===0) return;
    this.nuevoPersonaje.emit(this.personajes)
    console.log(this.personajes);
    this.personajes={name:'',power:0}
  }
}

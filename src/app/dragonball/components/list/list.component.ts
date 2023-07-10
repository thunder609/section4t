import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interface/personaje.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input()
   public personajes:Personaje[]=[{name:"pedro",power:10}]

   @Output()
   public onDelete:EventEmitter<string> = new EventEmitter();
  //  borradoPersonaje(index:number):void{
  //   this.onDelete.emit(index)
  //  }
   borradoPersonajebyId(id?:string):void{
    if (!id) return;
    console.log(id);
    this.onDelete.emit(id)
   }

}

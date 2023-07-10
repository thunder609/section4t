import { Injectable } from '@angular/core';
import { Personaje } from '../interface/personaje.interface';
import { v4 as uuid}  from 'uuid'
@Injectable({providedIn: 'root'})
export class DbzService {

  public personajes :Personaje[]=[{
    id:uuid(),
    name:"Goku",
    power:100000
  },

  {
    id:uuid(),
    name:"Vegeta",
  power:20000
},
{
  id:uuid(),
  name:"krillin",
power:2
}
]
onNuevoPersonaje(personaje:Personaje):void{
  const newpersonaje: Personaje={ id : uuid(), ...personaje}
  this.personajes.push(newpersonaje);
  console.log(this.personajes)

}
borradoPersonaje(item:number){
  this.personajes.splice(item,1);
}
borradoPersonajeByID(id:string){
  
this.personajes=this.personajes.filter(personaje=>personaje.id!=id)
}



}

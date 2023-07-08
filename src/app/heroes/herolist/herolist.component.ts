import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent {
   public superheroes :string[]=["simom","pedro","Maadona"];
   public ultimoborrado?:string;
   borrarultimo():string | void{
   
 
   this.ultimoborrado =   this.superheroes.pop();
   return  this.ultimoborrado;
   }
}

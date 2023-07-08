import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
public name:string="superman";
public age:number=10;
get CapitalizeName():string{
  return "Pedrto coral".toLowerCase();
}
 getDescription():string{
  return `${this.name} -${this.age}`
}
changeHer():void{
   this.name="atroboid";
}
changeAge():void{
  this.age=1;
}
}

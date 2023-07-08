import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  public title :string = 'titulo de bases';
  public contador:number = 0;

aumentar():number {
 console.log(this.contador);
  return this.contador++;
}
disminuir():number {
 console.log(this.contador);
  return this.contador--;
}
reset():number{
 return this.contador=10;

}
}

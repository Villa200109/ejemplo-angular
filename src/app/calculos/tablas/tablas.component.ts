import { Component, OnInit } from '@angular/core';
import { Imult } from '../operacioMult';



@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {
  multi: string = '';
  resultado: number = 0;
  valores=[];
  opera=[];
  numi:string = '';
  
  constructor() { }
  
  multiplicar(): void {
    let valores=[];
    let opera=[];
    let split=[];
    // this.valores= this.valores.slice(10);
    
    for (let i = 1; i < 11; i++) {
      opera.push([i + "x" + parseInt(this.multi)]);
      valores.push([ i * parseInt(this.multi)]);
      this.opera = opera;
      this.valores = valores;
    }
  }
  
 /*  ope:Imult[]=[
    {
      "numero":this.numi+"x1",
      "resultado":this.valores[0],
    },
    {
      "numero":this.multi+"x2",
      "resultado":this.valores[1],
    },
    {
      "numero":this.multi +"x3",
      "resultado":this.valores[2],
    },
    {
      "numero":this.multi +"x4",
      "resultado":this.valores[3],
    },
    {
      "numero":this.multi +"x5",
      "resultado":this.valores[4],
    },
    {
      "numero":this.multi +"x6",
      "resultado":this.valores[5],
    },
    {
      "numero":this.multi +"x7",
      "resultado":this.valores[6],
    },
    {
      "numero":this.multi +"x8",
      "resultado":this.valores[7],
    },
    {
      "numero":this.multi +"x9",
      "resultado":this.valores[8],
    },
    {
      "numero":this.multi +"x10",
      "resultado":this.valores[9],
    },
  ]
 */

  ngOnInit(): void {
  }

}

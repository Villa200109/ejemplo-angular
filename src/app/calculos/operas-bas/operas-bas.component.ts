import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css'],
})
export class OperasBasComponent implements OnInit {
  num1: string = '';
  num2: string = '';
  ope: string = '';

  resultado: number = 0;
  constructor() {}

  sumar(): void {
    // this.resultado = parseInt(this.num1) + parseInt(this.num2);
    if (this.ope == 'sumar') {
      this.resultado = parseInt(this.num1) + parseInt(this.num2);
    }
    if (this.ope == 'restar') {
      this.resultado = parseInt(this.num1) - parseInt(this.num2);
    }
    if (this.ope == 'multiplicar') {
      this.resultado = parseInt(this.num1) * parseInt(this.num2);
    }
    if (this.ope == 'dividir') {
      this.resultado = parseInt(this.num1) / parseInt(this.num2);
    }

  }

  ngOnInit(): void {}
}

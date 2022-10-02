import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css'],
})
export class CinepolisComponent implements OnInit {
  // Variables traidas
  nombreCli: string = '';
  cantCompra: string = '';
  tarCine: string = '';
  cantBole: string = '';

  // Varibles para operaciones
  cantBolePersona: number = 0;
  cliente: string = '';
  resultadoF: number = 0;
  precio: number = 0;
  ventaP: number = 0;

  // Descuentos
  desc: number = 0;
  descT: number = 0;

  // Total
  totalS: number = 0;


  // Alerta de exceder limite de boletines
  aviso: string= '';

  constructor() {}

  procesar(): void {
    // Precio del producto
    this.precio = parseInt(this.cantBole) * 12;

    // Cantidad por persona (Recibe el valor de cantidad de compradores)
    this.ventaP = parseInt(this.cantCompra) * 7;
    
    // boletas que esta solicitando
    this.cantBolePersona = parseInt(this.cantBole);

    // validacion cantidad por persona
    if (this.cantBolePersona <= this.ventaP) {

      // validaciones de descuentos
      if (this.cantBole == '3' || this.cantBole == '4' || this.cantBole == '5' ) {
        this.resultadoF = this.precio - 0.1 * this.precio;
        this.desc = 0.1 * this.precio;
        this.totalS = this.precio;
        this.aviso = '';
      } else if (this.cantBole == '1' || this.cantBole == '2') {
        this.resultadoF = this.precio;
        this.desc = 0;
        this.totalS = this.precio;
        this.aviso = '';
      } else {
        this.resultadoF = this.precio - 0.15 * this.precio;
        this.desc = 0.15 * this.precio;
        this.totalS = this.precio;
        this.aviso = '';
      }

      if (this.tarCine == 'si') {
        this.resultadoF = this.resultadoF - 0.1 * this.resultadoF;
        this.descT = 0.1 * this.resultadoF;
      } else {
        this.descT = 0;
      }
      // Resetea los valores a 0 cuado 
    }else{
      this.totalS = 0;
      this.desc = 0;
      this.descT = 0;
      this.resultadoF = 0;
      this.aviso = 'No puedes vender mas de '+ this.cantBole + ' boletas ya que el maximo para ' + this.cantCompra + ' persona(s) es de ' + this.ventaP;
    }
  }

  ngOnInit(): void {}
}

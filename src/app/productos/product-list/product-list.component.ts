import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=100;
  imageMargin:number=2;

  muestraImg:boolean=true;

  listFilter:string='';

  productos:IProducto[]=[
    {
      "productoId":1,
      "modelo":'sentra',
      "descripcion":'auto 4 puertas',
      "marca":'nissan',
      "year":'febrero 3 2020',
      "precio":250000,
      "puntos":3.3,
      "ImagenUrl":"https://upload.wikimedia.org/wikipedia/commons/3/3b/2020_Nissan_Sentra_SV%2C_front_10.22.20.jpg"
    },
    {
      "productoId":2,
      "modelo":'rio',
      "descripcion":'auto 4 puertas',
      "marca":'kia',
      "year":'febrero 10 2022',
      "precio":300000,
      "puntos":4,
      "ImagenUrl":"https://upload.wikimedia.org/wikipedia/commons/3/3b/2020_Nissan_Sentra_SV%2C_front_10.22.20.jpg"
    },
    {
      "productoId":3,
      "modelo":'a3',
      "descripcion":'auto 4 puertas',
      "marca":'audi',
      "year":'julio 30 2022',
      "precio":600000,
      "puntos":4,
      "ImagenUrl":"https://upload.wikimedia.org/wikipedia/commons/d/d4/Audi_A3_8Y_IMG_3465.jpg"
    },
    {
      "productoId":4,
      "modelo":'i8',
      "descripcion":'auto 2 puertas',
      "marca":'bmw',
      "year":'julio 30 2022',
      "precio":1200000,
      "puntos":5,
      "ImagenUrl":"https://cdn.forbes.com.mx/2020/12/IBM-i8-auto-1-scaled-e1607544741680.jpg"
    },
  ]


  constructor() { }

ShowImage():void{
 this.muestraImg=!this.muestraImg;
}


  ngOnInit(): void {
  }

}

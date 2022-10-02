import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { TablasComponent } from './calculos/tablas/tablas.component';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { ProductListComponent } from './productos/product-list/product-list.component';

const routes: Routes = [
  {path:'',component: ProductListComponent},
  {path:'OperaBas',component: OperasBasComponent},
  {path:'Tabla',component: TablasComponent},
  {path:'Cinepolis',component: CinepolisComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

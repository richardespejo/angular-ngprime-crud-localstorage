import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';


const routes: Routes = [
  { path:'' , pathMatch:'full', redirectTo:'listado'},
  { path:'listado' , component: ListadoComponent},
  { path:'mantenimiento/:id' , component: MantenimientoComponent},
  { path:'**' , pathMatch:'full', redirectTo:'listado'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }

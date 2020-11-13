import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'' , pathMatch:'full', redirectTo:'data'},
  { path:'data' , loadChildren: ()=> import('./data/data.module').then( (x)=>x.DataModule) },
  { path:'**' , pathMatch:'full', redirectTo:'data'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

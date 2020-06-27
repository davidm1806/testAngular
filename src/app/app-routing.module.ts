import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OpenStreeMapComponent} from './open-stree-map/open-stree-map.component';


const routes: Routes = [
  {path: '', component: OpenStreeMapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
